import actionTypes from '../constants/actionTypes';

export const postsReceived = posts => {
  return {
    type: actionTypes.POSTS_RECEIVED,
    payload: posts
  }
}

export const postItemReceived = postItem => {
    return {
        type: actionTypes.POSTITEM_RECEIVED,
        payload: postItem
    }
}

export const fetchPosts = () => async dispatch => {
    return fetch(`/posts`)
            .then(response => response.json())
            .then(data => dispatch(postsReceived(data.data)))
            .catch( e=> console.log(e));
}

export const fetchPostItem = (id) => async dispatch => {
    return fetch(`/posts/${id}`)
            .then(response => response.json())
            .then(data => dispatch(postItemReceived(data.data)))
            .catch( e=> console.log(e));
}

export const submitPost = data => async dispatch => {
    return fetch('/posts/', { 
        method: 'POST', 
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data), 
        mode: 'cors'})
        .catch( (e) => console.log(e) );
}  

export const editPost = (id, data) => async dispatch => {
    return fetch(`/posts/${id}`, { 
        method: 'PUT', 
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data), 
        mode: 'cors'})
        .catch( (e) => console.log(e) );
}  

export const deletePost = id => async dispatch => {
    return fetch(`/posts/${id}`, { 
        method: 'DELETE'})
        .catch( (e) => console.log(e) );
} 

export const signedIn = userID => {
    return {
        type: actionTypes.SIGN_IN,
        payload: userID
    }
} 

export const signedOut =() => {
    return {
        type: actionTypes.SIGN_OUT
    }
} 
