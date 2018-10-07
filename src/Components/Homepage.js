import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

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
        return (
            <div className="homepage">
                <h1>Users</h1>
                {this.props.users.map(user => { return <NavLink to={`/user/${user.id}`} key={user.id}>{user.name}</NavLink>})}
            </div>)
    }
}

let SmartHomepage = connect(state => ({ users: state.users }))(Homepage);

export default SmartHomepage;