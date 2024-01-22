import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";
import FilterProduct from "./FilterProduct";
import PaginationControlled from "./pagination";

const ProductList = () => {
  const { getProducts, products } = useProducts();

  useEffect(() => {
    getProducts();
  }, [getProducts]); // Add getProducts as a dependency

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
      <FilterProduct />
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {currentData().map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
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
