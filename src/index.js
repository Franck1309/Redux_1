import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.scss";

// importation de redux et toolkits
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { getPosts } from "./actions/post.action";
import { getUser } from "./actions/user.action";

// Création du store
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

store.dispatch(getPosts());
store.dispatch(getUser());


// Utilisation de createRoot au lieu de ReactDOM.render
const root = document.getElementById("root");
const reactRoot = createRoot(root);
reactRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);
