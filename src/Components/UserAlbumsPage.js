import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';

class UserAlbumsPage extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/albums')
            .then(response => {
                return response.json();
            })
            .then(albums => {
                this.props.dispatch({ type: 'LOAD_ALBUMS', albums: albums })
             });
    }
    render() {
        if (this.props.user !== undefined) {
            let filteredAlbums = this.props.albums.filter(album => album.userId === this.props.user.id);
            return (
                <div>
                    <Navigation />
                    <h1>{this.props.user.name}'s Albums</h1>
                    {filteredAlbums.map(album => 
                        { return (
                            <div key={album.id}>
                                <NavLink to={`/album/${album.id}`}>{album.title}</NavLink>
                            </div>)})}
                </div>)
        } else {
            return null;
        }
    }
}

let SmartUserAlbumsPage = connect((state, props) => 
({ user: state.users.find((user) => user.id.toString() === props.match.params.id), albums: state.albums, users: state.users }))(UserAlbumsPage)

export default SmartUserAlbumsPage;