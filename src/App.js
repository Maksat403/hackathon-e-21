import React from "react";
import Navbar from "./components/navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";
import ProductContextProvider from "./components/context/ProductContextProvider";
import AuthContextProvider from "./components/context/AuthContextProvider";
import CardContextProvider from "./components/context/CardContextProvider";

const App = () => {
  return (
    <div>
      <CardContextProvider>
        <AuthContextProvider>
          <ProductContextProvider>
            <Navbar />
            <MainRoutes />
          </ProductContextProvider>
        </AuthContextProvider>
      </CardContextProvider>
    </div>
  );
};

export default App;
