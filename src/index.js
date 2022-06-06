import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./store/favorites-context";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
