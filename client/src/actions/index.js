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
    return fetch('/blogs')
            .then(response => response.json())
            .then(data => dispatch(postsReceived(data.data)))
            .catch( e=> console.log(e));
}

export const fetchPostItem = (id) => async dispatch => {
    return fetch(`/blogs/${id}`)
            .then(response => response.json())
            .then(data => dispatch(postItemReceived(data.data)))
            .catch( e=> console.log(e));
}