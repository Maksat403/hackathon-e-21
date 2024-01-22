import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useProducts } from "../context/ProductContextProvider";

const FilterProduct = () => {
  const { fetchByParams } = useProducts();
  return (
    <div>
      <Paper
        sx={{
          position: "absolute",
          padding: 5,
          boxShadow: "0",
          backgroundColor: "transparent",
        }}
      >
        {/* <h5>Category</h5> */}
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all" // Здесь установите начальное значение
            name="radio-buttons-group"
            onChange={(e) => fetchByParams("category", e.target.value)}
          >
            <FormControlLabel
              value="all"
              control={<Radio />}
              label="Без фильтра"
            />
            <FormControlLabel value="Супы" control={<Radio />} label="Супы" />
            <FormControlLabel value="Пицца" control={<Radio />} label="Пицца" />
            <FormControlLabel value="Суши" control={<Radio />} label="Суши" />
          </RadioGroup>
        </FormControl>
      </Paper>
    </div>
  );
};

export default FilterProduct;
