import React, { createContext, useContext, useReducer } from "react";
import { calcSubPrice, calcTotalPrice } from "../../helpers/function";
import { ACTION_CARD } from "../../helpers/const";

const cardContext = createContext();
export const useCardContext = () => useContext(cardContext);

const INIT_STATE = { card: JSON.parse(localStorage.getItem("card")) };

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTION_CARD.GET_CARD:
      return { ...state, card: action.payload };
    default:
      return state;
  }
};

const CardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const changeProductCount = (count, id) => {
    if (count < 1) {
      alert("Число продуктов не может быть меньше одного");
      return;
    }
    let card = JSON.parse(localStorage.getItem("card"));
    card.products = card.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    card.totalPrice = calcTotalPrice(card.products);
    localStorage.setItem("card", JSON.stringify(card));

    getProductFromCard();
  };

  const deleteProductInCard = (id) => {
    let card = JSON.parse(localStorage.getItem("card"));
    card.products = card.products.filter((elem) => elem.item.id !== id);
    card.totalPrice = calcTotalPrice(card.products);
    localStorage.setItem("card", JSON.stringify(card));
    getProductFromCard();
  };

  const addProductToCard = (product) => {
    let card = JSON.parse(localStorage.getItem("card"));
    if (!card) {
      card = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };
    card.products.push(newProduct);
    card.totalPrice = calcTotalPrice(card.products);
    localStorage.setItem("card", JSON.stringify(card));
    getProductFromCard();
  };

  const getProductFromCard = () => {
    let card = JSON.parse(localStorage.getItem("card"));
    if (!card) {
      localStorage.setItem(
        "card",
        JSON.stringify({ products: [], tottalPrice: 0 })
      );
    }
    dispatch({
      type: ACTION_CARD.GET_CARD,
      payload: card,
    });
  };

  const checkProductInCard = (id) => {
    let card = JSON.parse(localStorage.getItem("card"));
    if (card) {
      let obj = card.products.find((elem) => elem.item.id === id);
      return obj ? true : false;
    }
  };

  const values = {
    addProductToCard,
    getProductFromCard,
    checkProductInCard,
    deleteProductInCard,
    changeProductCount,
    card: state.card,
  };

  return <cardContext.Provider value={values}>{children}</cardContext.Provider>;
};

export default CardContextProvider;
