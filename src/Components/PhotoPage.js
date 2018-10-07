import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const PhotoPage = (props) => {
    if (props.photo !== undefined) {
        return (
            <div>
                <Navigation />
                {/*Back to prior page*/}
                <img src={props.photo.url} alt={props.photo.title}></img>
                <p>{props.photo.title}</p>
            </div>)
    }
}

let SmartPhotoPage = connect((state, props) => 
({ photo: state.photos.find((photo) => photo.id.toString() === props.match.params.id) }))(PhotoPage)

export default SmartPhotoPage;