import { Container } from "@mui/material";
import React from "react";
import Form from "../form/Form";

const AddProduct = () => {
  return (
    <Container>
      <h2>Добавление блюда</h2>
      <Form isEdit={false} />
    </Container>
  );
};

export default AddProduct;
