import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContextProvider";
import { ADMIN_USER } from "../../helpers/const";
import { useAuthContext } from "../context/AuthContextProvider";
import Fv from "./favourite";

export default function ProductCard({ item }) {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();
  const { user } = useAuthContext();

  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <Card
      sx={{
        width: { md: "13vw", lg: "16vw" },
        height: "100%",
        boxShadow: "none",
        ".MuiOutlinedInput-notchedOutline": { border: 0 },
        margin: "2%",
        marginLeft: 15,
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <CardMedia
        onClick={() => navigate(`/details/${item.id}`)}
        sx={{ height: 200 }}
        image={item.picture}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>

        <Typography gutterBottom variant="h6" component="div">
          {item.category}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {truncateDescription(item.description, 100)}
        </Typography>
        <Fv id={item.id} />
      </CardContent>

      {ADMIN_USER.map((elem, index) =>
        user && elem.email === user.email ? (
          <CardActions>
            <Button onClick={() => navigate(`/edit/${item.id}`)} size="small">
              Изменить
            </Button>
            <Button onClick={() => deleteProduct(item.id)} size="small">
              Удалить
            </Button>
          </CardActions>
        ) : (
          ""
        )
      )}
    </Card>
  );
}
