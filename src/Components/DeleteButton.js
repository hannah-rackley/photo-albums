import React from 'react';
import { connect } from 'react-redux';

let DeleteButton = props => {
    let DeleteItemOnClick = () => {
        props.dispatch({ type: `DELETE_${props.type}`, item: props.item })
    };
    return <button onClick={DeleteItemOnClick}>X</button>
}

let SmartDeleteButton = connect(state => ({ dispatch: state.dispatch }))(DeleteButton)

export default SmartDeleteButton;