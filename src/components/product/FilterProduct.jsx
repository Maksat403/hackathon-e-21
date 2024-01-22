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
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel value="soup" control={<Radio />} label="Soup" />
            <FormControlLabel value="pizza" control={<Radio />} label="Pizza" />
            <FormControlLabel value="sushi" control={<Radio />} label="Sushi" />
          </RadioGroup>
        </FormControl>
      </Paper>
    </div>
  );
};

export default FilterProduct;
