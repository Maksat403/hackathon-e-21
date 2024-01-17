import React, { useEffect} from "react";
import { useProducts } from "../context/ProductContextProvider";
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";
import FilterProduct from "./FilterProduct";

const ProductList = () => {
  const { getProducts, products} = useProducts();

  useEffect(() => {
    getProducts();
  });

  return (
    <Box>
      <FilterProduct/>
    <Box
    style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {products ? (
        products.map((item) => <ProductCard key={item.id} item={item} />)
      ) : (
        <h2>Загружаем данные...</h2>
      )}
      
    </Box>
    </Box>

  );
};

export default ProductList;
