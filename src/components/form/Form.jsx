import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, TextField, MenuItem } from "@mui/material";

const init = {
  title: "",
  description: "",
  category: "",
  price: "",
  weight: "",
  picture: "",
};

const categories = ["Супы", "Пицца", "Суши"];

const Form = ({ isEdit }) => {
  const { createProduct, oneProduct, editProduct } = useProducts();
  const [product, setProduct] = useState(init);
  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit && oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);

  const saveEditedProduct = () => {
    for (let key in product) {
      if (!product[key]) {
        alert("Пустые поля!");
        return;
      }
    }
    editProduct(product);
    setProduct(init);
    navigate("/menu");
  };

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
    for (let key in product) {
      if (!product[key]) {
        alert("Пожайлуста не оставляйте пустые поля!");
        return;
      }
    }
    createProduct(product);
    setProduct(init);
    navigate("/menu");
  };

  return (
    <FormControl
      sx={{ gap: "20px", width: "100%", mt: "50px", margin: "50px, auto" }}
      color="success"
    >
      <TextField
        label="название блюда"
        variant="outlined"
        name="title"
        fullWidth
        onChange={handleInput}
        value={product.title}
      />
      <TextField
        label="описание"
        variant="outlined"
        name="description"
        fullWidth
        onChange={handleInput}
        value={product.description}
      />
      <TextField
        label="категория"
        variant="outlined"
        name="category"
        select
        fullWidth
        onChange={handleInput}
        value={product.category}
      >
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="вес"
        variant="outlined"
        name="weight"
        fullWidth
        onChange={handleInput}
        value={product.weight}
      />
      <TextField
        label="цена"
        variant="outlined"
        name="price"
        fullWidth
        onChange={handleInput}
        value={product.price}
      />
      <TextField
        label="ссылка на фотографию"
        variant="outlined"
        name="picture"
        fullWidth
        onChange={handleInput}
        value={product.picture}
      />

      {isEdit ? (
        <Button
          onClick={saveEditedProduct}
          variant="contained"
          sx={{ my: 2, color: "black" }}
        >
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
