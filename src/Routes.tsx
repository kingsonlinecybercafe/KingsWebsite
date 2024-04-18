import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LANDINGPAGE from "pages/LANDINGPAGE";
import ABOUTUS from "pages/ABOUTUS";
import CONTACT from "pages/CONTACT";
import SignUp from "pages/SignUp";
import Userpage from "pages/Userpage";
import SERVICES from "pages/SERVICES";
import SignInPage from "pages/SignIn";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <LANDINGPAGE /> },
    { path: "*", element: <NotFound /> },
    {
      path: "aboutus",
      element: <ABOUTUS />,
    },
    {
      path: "contact",
      element: <CONTACT />,
    },
    {
      path: "services",
      element: <SERVICES />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "signin",
      element: <SignInPage />,
    },
    {
      path: "userpage",
      element: <Userpage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
