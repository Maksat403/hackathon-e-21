import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContextProvider";
import StarRating from "./StarRating";

export default function ProductCard({ item }) {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();
  return (
    <Card sx={{ maxWidth: 200, m: 2 }}>
      <CardMedia
        onClick={() => navigate(`/details/${item.id}`)}
        sx={{ height: 200 }}
        image={item.picture}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          Вес: {item.weight}г
        </Typography>
        <br />
        <Typography gutterBottom variant="h5" component="div">
          {item.price} сом
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate(`/edit/${item.id}`)} size="small">
          Изменить
        </Button>
        <Button onClick={() => deleteProduct(item.id)} size="small">
          Удалить
        </Button>
      </CardActions>
        <StarRating/>
    </Card>
  );
}
