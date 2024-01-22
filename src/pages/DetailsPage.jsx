import React, { useEffect } from "react";
import { useProducts } from "../components/context/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Container } from "@mui/material";
import { useCardContext } from "../components/context/CardContextProvider";

const DetailsPage = () => {
  const navigate = useNavigate();
  const { addProductToCard, checkProductInCard } = useCardContext();
  const { oneProduct, getOneProduct } = useProducts();
  console.log(oneProduct);

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);
  return (
    <div>
      {oneProduct ? (
        <Container sx={{ mt: 8 }}>
          <Card sx={{ maxWidth: "100%", mb: 10 }}>
            <CardActionArea sx={{ height: 600, display: "flex", p: 2 }}>
              <CardMedia
                sx={{ width: 500, objectFit: "contain" }}
                component="img"
                height="140"
                image={oneProduct.picture}
                alt="product"
              />
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {oneProduct.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {oneProduct.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Вес: {oneProduct.weight}г
                  <br />
                  {oneProduct.category}
                </Typography>
                <br />
                <Typography gutterBottom variant="h5" component="div">
                  {oneProduct.price} сом
                </Typography>
              </CardContent>

              {checkProductInCard(oneProduct.id) ? (
                <div>
                  <Button
                    variant="contained"
                    disabled
                    sx={{ m: "3px", p: "12px 15px" }}
                  >
                    Добавить в корзину
                  </Button>
                  <Button
                    onClick={() => navigate("/card")}
                    variant="contained"
                    sx={{ m: "15px", p: "10px" }}
                  >
                    Перейти к корзине
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => addProductToCard(oneProduct)}
                  variant="contained"
                  sx={{ m: "3px" }}
                >
                  Добавить в корзину
                </Button>
              )}
            </CardActionArea>
          </Card>
        </Container>
      ) : (
        <h1>Загружаем данные...</h1>
      )}
    </div>
  );
};

export default DetailsPage;
