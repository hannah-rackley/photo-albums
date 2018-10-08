const loadUsers = (oldState, action) => {
    return {
        ...oldState, 
        users: action.users, 
    }
}

const loadAlbums = (oldState, action) => {
    return {
        ...oldState, 
        albums: action.albums, 
    }
}

const loadPhotos = (oldState, action) => {
    return {
        ...oldState, 
        photos: action.photos, 
    }
}

const deleteUser = (oldState, action) => {
    return {
        ...oldState, 
        users: oldState.users.filter(user => user.id !== action.item.id)
    }
}

const deleteAlbum = (oldState, action) => {
    return {
        ...oldState, 
        albums: oldState.albums.filter(album => album.id !== action.item.id)
    }
}

const deletePhoto = (oldState, action) => {
    return {
        ...oldState, 
        photos: oldState.photos.filter(photo => photo.id !== action.item.id)
    }
}

 const reducerRouter = {
    "LOAD_USERS": loadUsers,
    "LOAD_ALBUMS": loadAlbums,
    "LOAD_PHOTOS": loadPhotos,
    "DELETE_USER": deleteUser,
    "DELETE_ALBUM": deleteAlbum,
    "DELETE_PHOTO": deletePhoto
}

const reducer = (oldState, action) => {
    let actionType = reducerRouter[action.type];
    if (actionType) {
        return actionType(oldState, action);
    } else {
        return oldState;
    }
}

export default reducer;
