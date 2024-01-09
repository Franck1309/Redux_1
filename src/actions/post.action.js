import axios from "axios";

export const GET_POSTS = "GET_POSTS"; // Déclaration d'un const qui sera utilisé comme type  d'action
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_POST_LIKE = "ADD_POST_LIKE";

export const getPosts = () => {
  // action qui va chercher dans la base de données
  return (dispatch) => {
    return axios.get("http://localhost:3000/posts").then((res) => {
      dispatch({ type: GET_POSTS, payload: res.data }); // Envoi la res au type GET_POSTS dans le state
    });
  };
};

export const addPost = (data) => {
  // action qui post dans la base de données
  return (dispatch) => {
    return axios.post("http://localhost:3000/posts", data).then((res) => {
      dispatch({ type: ADD_POST, payload: data });
    });
  };
};

export const editPost = (data) => {
  // action qui édit dans la base de données
  return (dispatch) => {
    return axios
      .put(`http://localhost:3000/posts/${data.id}`, data)
      .then((res) => {
        dispatch({ type: EDIT_POST, payload: data });
      });
  };
};

export const deletePost = (postId) => {
  // action qui delete dans la base de données
  return (dispatch) => {
    return axios.delete(`http://localhost:3000/posts/${postId}`).then((res) => {
      dispatch({ type: DELETE_POST, payload: postId });
    });
  };
};

export const addPostLike = (data) => {
  // action qui édit les likes dans la base de données
  return (dispatch) => {
    return axios
      .put(`http://localhost:3000/posts/${data.id}`, data)
      .then((res) => {
        dispatch({ type: ADD_POST_LIKE, payload: data });
      });
  };
};
