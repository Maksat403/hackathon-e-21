import React from "react";
import ProductList from "../components/product/ProductList";

const HomePage = () => {
  return (
    <div>
      <section>
        <div>
          <h1>
            <span>Хорошая кухня создает хороших людей.</span>
          </h1>
        </div>
      </section>
      <ProductList />
    </div>
  );
};

export default HomePage;
