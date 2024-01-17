import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import ProductCard from "./ProductCard";
import PaginationControlled from "./pagination";

const ProductList = () => {
  const { getProducts, products } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const itemPerPage = 3;
  const count = Math.ceil(products.length / itemPerPage);

  function currentData() {
    const begin = (page - 1) * itemPerPage;
    const end = begin + itemPerPage;
    return products.slice(begin, end);
  }

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products ? (
          currentData().map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <h2>Загружаем данные...</h2>
        )}
      </div>
      <PaginationControlled
        handleChange={handleChange}
        page={page}
        count={count}
      />
    </div>
  );
};
export default ProductList;
