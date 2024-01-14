import React, { useEffect } from "react";
import { useProducts } from "../context/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getProducts, products } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {products ? (
        products.map((item) => <ProductCard item={item} />)
      ) : (
        <h2>Загружаем данные...</h2>
      )}
    </div>
  );
};

export default ProductList;
