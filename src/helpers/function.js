import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../components/context/AuthContextProvider";

export const calcTotalPrice = (products) => {
  return products.reduce((prev, curr) => {
    return (prev += curr.subPrice);
  }, 0);
};

export const calcSubPrice = (product) => +product.count * product.item.price;

export const ProtectedRouts = () => {
  const { user } = useAuthContext();

  const isAdmin = () => {
    if (user.email === "chadface@gmail.com") {
      return true;
    }
    return false;
  };

  return isAdmin() ? <Outlet /> : <Navigate to="/login" />;
};
