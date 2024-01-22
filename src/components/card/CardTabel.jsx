import React, { useState } from "react";
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
import BuyModal from "./BuyModal";

const CardTable = ({ card }) => {
  const { deleteProductInCard, changeProductCount } = useCardContext();
  const [isBuyModalOpen, setBuyModalOpen] = useState(false);

  const handleBuyClick = () => {
    setBuyModalOpen(true);
  };

  const handleBuyConfirmation = () => {
    alert("Payment successful! Thank you for your purchase.");
    setBuyModalOpen(false);
  };

  const handleBuyCancel = () => {
    setBuyModalOpen(false);
  };
  return (
    <div>
      <Container>
        <div className="bag-content">
          <div className="header">
            <h1 className="bag-header">Ваша корзина</h1>
            <div className="bag-header-message">
              <div className="centered-text">
                <span>У нас бесплатная доставка</span>
              </div>
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
                  ></Select>
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
                    sx={{
                      m: "5 0",
                      backgroundColor: "#F93E03",
                      color: "#FFFFFF",
                    }}
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
              Итого к оплате: {card?.totalPrice}
              <Button
                id="btn1"
                variant="contained"
                onClick={handleBuyClick}
                sx={{
                  height: "20px",
                  p: 2,
                  backgroundColor: "#F93E03",
                  color: "#FFFFFF",
                }}
              >
                Купить
              </Button>
            </Typography>
          </Box>
        </div>
        <BuyModal
          isOpen={isBuyModalOpen}
          onClose={handleBuyCancel}
          onBuy={handleBuyConfirmation}
        />
      </Container>
    </div>
  );
};

export default CardTable;
