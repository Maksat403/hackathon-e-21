import { Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../context/ProductContextProvider";

const init = {
  title: "",
  description: "",
  category: "",
  price: "",
  weight: "",
  picture: "",
};

const Form = ({ isEdit }) => {
  const { createProduct } = useProducts();
  const [product, setProduct] = useState(init);

  const handleInput = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  const addProduct = () => {
    createProduct(product);
    setProduct(init);
  };

  return (
    <FormControl
      sx={{ gap: "20px", width: "100%", mt: "50px", margin: "50px, auto" }}
      color="success"
    >
      <TextField
        placeholder="название блюда"
        variant="outlined"
        name="title"
        fullWidth
        onChange={handleInput}
        value={product.title}
      />
      <TextField
        placeholder="описание"
        variant="outlined"
        name="description"
        fullWidth
        onChange={handleInput}
        value={product.description}
      />
      <TextField
        placeholder="категория"
        variant="outlined"
        name="category"
        fullWidth
        onChange={handleInput}
        value={product.category}
      />
      <TextField
        placeholder="вес"
        variant="outlined"
        name="weight"
        fullWidth
        onChange={handleInput}
        value={product.weight}
      />
      <TextField
        placeholder="цена"
        variant="outlined"
        name="price"
        fullWidth
        onChange={handleInput}
        value={product.price}
      />
      <TextField
        placeholder="ссылка на фотографию"
        variant="outlined"
        name="picture"
        fullWidth
        onChange={handleInput}
        value={product.picture}
      />

      {isEdit ? (
        <Button variant="contained" sx={{ my: 2, color: "black" }}>
          Сохранить изменения
        </Button>
      ) : (
        <Button
          onClick={() => addProduct(product)}
          variant="contained"
          sx={{ my: 2, color: "black" }}
        >
          Добавить
        </Button>
      )}
    </FormControl>
  );
};

export default Form;
