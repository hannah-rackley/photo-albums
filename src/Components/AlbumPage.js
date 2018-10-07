import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

class AlbumPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.album !== undefined) {
            let filteredPhotos = this.props.photos.filter(photo => photo.albumId === this.props.album.id);
            return (
                <div>
                    <Navigation />
                    <h1>{this.props.album.title}</h1>
                    {/*Back to prior page*/}
                    {filteredPhotos.map(photo => 
                        { return (
                            <div key={photo.id}>
                                <Link to={`/photo/${photo.id}`}>
                                    <img src={photo.thumbnailUrl} alt={photo.title}/>
                                </Link>
                            </div>
                    )})}
                </div>)
        } else {
            return null;
        }
    }
}

let SmartAlbumPage = connect((state, props) => 
({ album: state.albums.find((album) => album.id.toString() === props.match.params.id), photos: state.photos, albums: state.albums }))(AlbumPage)

export default SmartAlbumPage;