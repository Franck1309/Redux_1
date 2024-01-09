import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPosts } from "../actions/post.action";

const PostForm = () => {
  const form = useRef(); // Récupère les éléments du form
  const user = useSelector((state) => state.userReducer); // Va chercher les données de userReducer dans le store
  const dispatch = useDispatch() // Hook qui permet d'envoyer les données au store


  const handleForm = async (e) => { // fonction asyncrone de gestion du form
    e.preventDefault(); 

    const postData = { // Données à envoyer au store
      author: user.pseudo,
      title: form.current[0].value,
      content: form.current[1].value,
      likes: 0,
    }; 

    await dispatch(addPost(postData)) // Seulement quand tu as envoyer les données postData
    dispatch(getPosts()) // Va rechercher à la base de données pour mettre à jour l'id
    form.current.reset() // Reinitialise tout les éléments du form
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={(e) => handleForm(e)}> 
        <input type="text" placeholder="Titre du poste" />
        <textarea placeholder="Postez vos pensées..."></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
