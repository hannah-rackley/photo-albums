import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SmartDeleteUserButton from './DeleteUserButton';

class Homepage extends React.Component {
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.props.dispatch({ type: 'LOAD_USERS', users: users })
             });
    }
    render() {
        if (this.props.users !== undefined) {
            return (
                <div className="homepage">
                    <h1>Users</h1>
                    {this.props.users.map(user => { return (
                        <div key={user.id}>
                            <Link to={`/user/${user.id}`}>{user.name}</Link>
                            <SmartDeleteUserButton user={user}/>
                        </div>
                    )})}
                </div>)
        } else {
            return <p>Loading...</p>
        }
    }
}

let SmartHomepage = connect(state => state)(Homepage);

export default SmartHomepage;