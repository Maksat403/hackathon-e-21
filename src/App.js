import React from "react";
import Navbar from "./components/navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";
import ProductContextProvider from "./components/context/ProductContextProvider";

const App = () => {
  return (
    <div>
      <ProductContextProvider>
      <Navbar />
      <MainRoutes />
      </ProductContextProvider>
    </div>
  );
};

export default App;
