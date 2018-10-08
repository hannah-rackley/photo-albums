import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SmartDeleteButton from './DeleteButton';
import Navigation from './Navigation';

class Homepage extends React.Component {
    componentDidMount() {
        if (this.props.users === undefined) {
            fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.props.dispatch({ type: 'LOAD_USERS', users: users })
             });
        }
    }
    render() {
        if (this.props.users !== undefined) {
            return (
                <div className="homepage">
                    <Navigation />
                    <h1>Users</h1>
                    {this.props.users.map(user => { return (
                        <div key={user.id}>
                            <Link to={`/user/${user.id}`}>{user.name}</Link>
                            <SmartDeleteButton item={user} type='USER'/>
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