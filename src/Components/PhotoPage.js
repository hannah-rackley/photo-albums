import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';

const PhotoPage = (props) => {
    if (props.photo !== undefined) {
        return (
            <div>
                <Navigation />
                <img src={props.photo.url} alt={props.photo.title}/>
                <p>{props.photo.title}</p>
            </div>)
    } else {
        return <p>Loading...</p>
    }
}

let SmartPhotoPage = connect((state, props) => 
({ photo: state.photos.find((photo) => photo.id.toString() === props.match.params.id) }))(PhotoPage)

export default SmartPhotoPage;