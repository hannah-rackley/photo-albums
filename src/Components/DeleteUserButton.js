import React from 'react';
import { connect } from 'react-redux';

let DeleteUserButton = props => {
    let DeleteUserOnClick = () => props.dispatch({ type: 'DELETE_USER', user: props.user });
    return <button onClick={DeleteUserOnClick}>X</button>
}

let SmartDeleteUserButton = connect(state => ({ dispatch: state.dispatch }))(DeleteUserButton)

export default SmartDeleteUserButton;