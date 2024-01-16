import React from "react";
import AdminPage from "../pages/AdminPage";
import EditPage from "../pages/EditPage";
import { Route, Routes } from "react-router-dom";
import Menu from "../pages/Menu";
import DetailsPage from "../pages/DetailsPage";
import HomePage from "../pages/HomePage";

export const ADMIN_ROUTES = [
  {
    link: "/",
    element: <HomePage />,
    id: 1,
  },
  {
    link: "/admin",
    element: <AdminPage />,
    id: 2,
  },
  {
    link: "/edit/:id",
    element: <EditPage />,
    id: 3,
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
];

const MainRoutes = () => {
  return (
    <Routes>
      {ADMIN_ROUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}

      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
