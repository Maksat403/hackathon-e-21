import React, { useEffect } from "react";
import { useProducts } from "../context/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getProducts, products } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products ? (
        products.map((item) => <ProductCard key={item.id} item={item} />)
      ) : (
        <h2>Загружаем данные...</h2>
      )}
    </div>
  );
};

export default ProductList;
