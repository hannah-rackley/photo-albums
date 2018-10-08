import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

class UserAlbumsPage extends React.Component {
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/albums')
            .then(response => {
                return response.json();
            })
            .then(albums => {
                this.props.dispatch({ type: 'LOAD_ALBUMS', albums: albums })
             })
             .then(fetch('http://jsonplaceholder.typicode.com/photos')
             .then(response => {
                 return response.json();
             })
             .then(photos => {
                 this.props.dispatch({ type: 'LOAD_PHOTOS', photos: photos })
             }))
    }

    getPhotoThumbnails() {
        let filteredAlbums = this.props.albums.filter(album => album.userId === this.props.user.id);
        return filteredAlbums.map(album => {
            let currentPhoto = this.props.photos.find(photo => photo.albumId === album.id)
            return {album: album, thumbnail: currentPhoto.thumbnailUrl, photoAlbumId: currentPhoto.albumId}
        })
    }
    render() {
        if (this.props.photos !== undefined) {
            let userAlbums = this.getPhotoThumbnails();
            return (
                <div>
                    <Navigation />
                    <h1>{this.props.user.name}'s Albums</h1>
                    {userAlbums.map(current => 
                        { return (
                            <div key={current.album.id}>
                                <p>{current.album.title}</p>
                                <div>
                                    <Link to={`/album/${current.album.id}`}>
                                        <img src={current.thumbnail} alt={current.album.title}/>
                                    </Link>
                                </div>
                            </div>)})}
                </div>)
        } else {
            return <p>Loading...</p>
        }
    }
}

let SmartUserAlbumsPage = connect((state, props) => 
({ user: state.users.find((user) => user.id.toString() === props.match.params.id), albums: state.albums, photos: state.photos, users: state.users }))(UserAlbumsPage)

export default SmartUserAlbumsPage;