import { Container } from "@mui/material";
import React, { useEffect } from "react";
import Form from "../form/Form";
import { useProducts } from "../context/ProductContextProvider";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { getOneProduct } = useProducts();

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  return (
    <Container>
      <Form isEdit={true} />
    </Container>
  );
};

export default EditProduct;
