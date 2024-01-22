import React from "react";
import ProductList from "../components/product/ProductList";
import ImageSlider from "../components/navbar/carousel";

const Menu = () => {
  return (
    <div>
      <section>
        <div>
          <h1
            style={{
              textAlign: "center",
              fontSize: "28px",
              color: "#333",
              margin: "20px 0",
            }}
          >
            <span
              style={{
                padding: "5px",
                color: "black",
                borderRadius: "5px",
              }}
            >
              Хорошая кухня создает хороших людей.
            </span>
          </h1>
        </div>
      </section>

      <ProductList />
      <ImageSlider />
    </div>
  );
};

export default Menu;
