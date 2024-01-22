import { Button, Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCardContext } from "../components/context/CardContextProvider";
import CardTabel from "../components/card/CardTabel";

const CardPage = () => {
  const { card } = useCardContext();
  const navigate = useNavigate();
  return (
    <>
      {card.products.length > 0 ? (
        <CardTabel card={card} />
      ) : (
        <Container>
          <div className="bag-container">
            <div className="header">
              <h1 className="bag-header">Похоже тут ещё пусто</h1>
              <div className="bag-header-message">
                <span style={{ marginLeft: "8px", fontSize: "19px" }}>
                  Самое время выбрать вкусности
                </span>
              </div>
            </div>
            <div onClick={() => navigate("/menu")} className="bag-buttons">
              <Button>Вернуться к меню</Button>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default CardPage;
