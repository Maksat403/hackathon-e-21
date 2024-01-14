import React from "react";
import Navbar from "./components/homePage/Navbar";
import MainRoutes from "./routes/MainRoutes";
import ProductContextProvider from "./components/context/ProductContextProvider";

const App = () => {
  return (
    <div>
      <Navbar />
      <ProductContextProvider>
        <MainRoutes />
      </ProductContextProvider>
    </div>
  );
};

export default App;
