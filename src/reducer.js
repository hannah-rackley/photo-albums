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

 const reducerRouter = {
    "LOAD_USERS": loadUsers,
    "LOAD_ALBUMS": loadAlbums
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