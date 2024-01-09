import React, { useState } from "react";
import Like from "./Like";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "./Utils";
import { deletePost, editPost } from "../actions/post.action";

const Post = ({ post }) => {
  const [editToggle, setEditToggle] = useState(false); // Savoir si on est en train d'éditer ou non
  const user = useSelector((state) => state.userReducer); // Va chercher les données de userReducer dans le store
  const [editContent, setEditContent] = useState(post.content); // Contenu du form à éditer
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    // gestion de l'édit du form
    e.preventDefault();

    const postData = {
      // data à remettre à jour
      title: post.title,
      author: user.pseudo,
      likes: post.likes,
      id: post.id,
      content: editContent,
    };

    dispatch(editPost(postData));
    setEditToggle(false);
  };
  return (
    <div className="post">
      {!isEmpty(user) && user.pseudo === post.author && (
        <div className="edit-delete">
          <img
            src="./icons/edit.svg"
            alt="edit"
            onClick={() => setEditToggle(!editToggle)}
          />
          <img
            src="./icons/delete.svg"
            alt="delete"
            onClick={() => dispatch(deletePost(post.id))}
          />
        </div>
      )}
      <h2>{post.title}</h2>
      <img
        src="https://picsum.photos/1500/400"
        className="post-img"
        alt="img-post"
      />

      {editToggle ? (
        <form onSubmit={(e) => handleEdit(e)}>
          <textarea
            autoFocus={true}
            defaultValue={post.content}
            onChange={(e) => setEditContent(e.target.value)}
          ></textarea>
          <input type="submit" value="Valider modification" />
        </form>
      ) : (
        <p>{post.content}</p>
      )}

      <div className="author">
        <h5>{post.author}</h5>
        <Like post={post} />
      </div>
    </div>
  );
};

export default Post;
