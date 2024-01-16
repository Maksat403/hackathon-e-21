import React from "react";
import Navbar from "./components/homePage/Navbar";
import MainRoutes from "./routes/MainRoutes";
import ProductContextProvider from "./components/context/ProductContextProvider";
import Carousel from "./components/homePage/carousel";
import SwipeableTextMobileStepper from "./components/homePage/carousel";

const App = () => {
  return (
    <div>
      <Navbar />
      <SwipeableTextMobileStepper />
      <ProductContextProvider>
        <MainRoutes />
      </ProductContextProvider>
    </div>
  );
};

export default App;
