import React from "react";
import "../card/card.css";
import {
  Container,
  Box,
  Typography,
  Select,
  MenuItem,
  Card,
  CardMedia,
  Button,
} from "@mui/material";
import { useCardContext } from "../context/CardContextProvider";

const CardTable = ({ card }) => {
  const { deleteProductInCard, changeProductCount } = useCardContext();
  return (
    <div>
      <Container>
        <div className="bag-content">
          <div className="header">
            <h1 className="bag-header">Ваша корзина</h1>
            <div className="bag-header-message">
              <span>У нас бесплатная доставка</span>
            </div>
          </div>
          {card.products?.map((elem, index) => (
            <div key={index} className="bg-card">
              <Card
                sx={{
                  display: "flex",
                  marginTop: "100px",
                  width: "570px",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    m: 3,
                  }}
                >
                  <Typography component="div" variant="h5">
                    {elem.item.title}
                    <br />
                  </Typography>
                  <Select
                    onChange={(e) =>
                      changeProductCount(e.target.value, elem.item.id)
                    }
                    labelId="custom-select-label"
                    id="custom-select"
                    sx={{ width: "150px" }}
                    value={elem.count}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={""}>Много есть тоже вредно{")"}</MenuItem>
                  </Select>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", m: 3 }}>
                  <Typography sx={{ fontSize: "25px" }}>
                    Цена: {elem.item.price} сом
                  </Typography>
                  <CardMedia
                    component={"img"}
                    sx={{ width: "251", objectFit: "cover", height: "220px" }}
                    image={elem.item.picture}
                    alt="Фото еды"
                  />
                  <Button
                    onClick={() => deleteProductInCard(elem.item.id)}
                    variant="contained"
                    size="medium"
                    sx={{ m: "5 0" }}
                  >
                    Удалить из корзины
                  </Button>
                </Box>
              </Card>
            </div>
          ))}

          <Box className="bag_total-label">
            <Typography
              sx={{
                display: "flex",
                fontSize: "24px",
                fontWeight: 600,
                color: "#1d1d1f",
                mt: 1,
                justifyContent: "space-between",
              }}
              variant="h6"
              component="div"
            >
              Итого к оплате:{card?.totalPrice}
              <Button variant="contained" sx={{ height: "20px", p: 2 }}>
                Купить
              </Button>
            </Typography>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default CardTable;
