import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import SmartDeleteButton from './DeleteButton';

class AlbumPage extends React.Component {
    render() {
        if (this.props.albums !== undefined) {
            let filteredPhotos = this.props.photos.filter(photo => photo.albumId === this.props.album.id);
            return (
                <div>
                    <Navigation />
                    <h1>{this.props.album.title}'s Photos</h1>
                    {filteredPhotos.map(photo => 
                        { return (
                            <div key={photo.id}>
                                <Link to={`/photo/${photo.id}`}>
                                    <img src={photo.thumbnailUrl} alt={photo.title}/>
                                </Link>
                                <SmartDeleteButton item={photo} type='PHOTO'/>
                            </div>
                    )})}
                </div>)
        } else {
            return <p>Loading...</p>
        }
    }
}

let SmartAlbumPage = connect((state, props) => 
({ album: state.albums.find((album) => album.id.toString() === props.match.params.id), photos: state.photos, albums: state.albums }))(AlbumPage)

export default SmartAlbumPage;