import React from "react";
import AdminPage from "../pages/AdminPage";
import EditPage from "../pages/EditPage";
import { Route, Routes } from "react-router-dom";
import Menu from "../pages/Menu";
import DetailsPage from "../pages/DetailsPage";
import HomePage from "../pages/HomePage";
import Register from "../components/auth/Register";
import CardPage from "../pages/CardPage";
import NotFoundPage from "../pages/NotFoundPage";
import Login from "../components/auth/Login";
import { ProtectedRouts } from "../helpers/function";

export const ADMIN_ROUTES = [
  {
    link: "/admin",
    element: <AdminPage />,
    id: 1,
  },
  {
    link: "/edit/:id",
    element: <EditPage />,
    id: 2,
  },
];

const PUBLIC_ROUTES = [
  {
    link: "/menu",
    element: <Menu />,
    id: 1,
  },
  {
    link: "/details/:id",
    element: <DetailsPage />,
    id: 2,
  },
  {
    link: "/register",
    element: <Register />,
    id: 3,
  },
  {
    link: "/login",
    element: <Login />,
    id: 4,
  },

  {
    link: "/card",
    element: <CardPage />,
    id: 5,
  },
  {
    link: "*",
    element: <NotFoundPage />,
    id: 6,
  },
  {
    link: "/",
    element: <HomePage />,
    id: 7,
  },
];
const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRouts />}>
        {ADMIN_ROUTES.map((elem) => (
          <Route path={elem.link} element={elem.element} key={elem.id} />
        ))}
      </Route>

      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
