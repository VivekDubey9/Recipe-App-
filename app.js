import React, { useContext, useState, useEffect } from "react";
import ReactDom from "react-dom/client";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import Footer from "./Components/Footer.js";
import About from "./Components/About.js";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./Components/ContactUs.js";
import RecipeDetails from "./Components/RecipeDetails.js";

import AuthContext from "./Components/AuthContext.js";

import Error from "./Components/Error.js";
import { Provider } from "react-redux";

import store from "./Utils/store.js";
import FavRecipes from "./Components/FavRecipes.js";

const App = () => {
  const [newinfo, setnewinfo] = useState("hello devs!");

  return (
    <>
      <Provider store={store}>
        {/*this line will now provide store to my app  */}
        <AuthContext.Provider value={{ username: newinfo }}>
          <Header />
          <Outlet />
          <Footer />
        </AuthContext.Provider>
      </Provider>
      {/* <Body></Body>
        <Footer></Footer> */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/recipe/:id",
        element: <RecipeDetails />,
      },
      {
        path: "/fav-recipes",
        element: <FavRecipes />,
      },
    ],
  },
  {
    path: "*", // Wildcard to match any route
    element: <Error></Error>,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
