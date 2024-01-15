import React from "react";
import AdminPage from "../pages/AdminPage";
import EditPage from "../pages/EditPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DetailsPage from "../pages/DetailsPage";

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
    link: "/",
    element: <HomePage />,
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
