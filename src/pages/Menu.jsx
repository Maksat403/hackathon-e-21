import React from "react";
import ProductList from "../components/product/ProductList";
import ImageSlider from "../components/navbar/carousel";

const Menu = () => {
  return (
    <div>
      <section>
        <div>
          <ImageSlider />
          <h1>
            <span className="centered-text">
              Хорошая кухня создает хороших людей.
            </span>
          </h1>
        </div>
      </section>

      <ProductList />
    </div>
  );
};

export default Menu;
