import React from "react";
import axios from "axios";
import { ACTION_PRODUCTS, API_PRODUCTS } from "../../helpers/const";
import { createContext, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_PRODUCTS.GET_PRODUCTS:
      return { ...state, products: action.payload.data};
    case ACTION_PRODUCTS.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const location = useLocation();
  const navigate = useNavigate()

  //! CREATE
  const createProduct = async (newProduct) => {
    try {
      await axios.post(API_PRODUCTS, newProduct);
    } catch (error) {
      console.error(error);
    }
  };

  //! READ +добавила для поиска `... ${window.location.search}`
  const getProducts = async () => {
    try {
      let res = await axios(`${API_PRODUCTS}/${window.location.search}`);
      dispatch({
        type: ACTION_PRODUCTS.GET_PRODUCTS,
        payload: res,
      });
    } catch (error) {
      console.error(error);
    }
  };
  //! DETAILS

  const getOneProduct = async (id) => {
    try {
      let { data } = await axios(`${API_PRODUCTS}/${id}`);
      dispatch({
        type: ACTION_PRODUCTS.GET_ONE_PRODUCT,
        payload: data,
      });
    } catch (error) {
      console.error();
    }
  };

  //! EDIT

  const editProduct = async (newProduct) => {
    try {
      await axios.patch(`${API_PRODUCTS}/${newProduct.id}`, newProduct);
      getProducts();
    } catch (error) {
      console.error();
    }
  };

  //! DELETE

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_PRODUCTS}/${id}`);
      getProducts();
    } catch (error) {
      console.error();
    }
  };

  //! Фильтрация начало
  function fetchByParams(query, value){
    const paramsFromUrl = new URLSearchParams(location.search);
    if(value === "all"){
      paramsFromUrl.delete(query);
    } else {
      paramsFromUrl.set(query, value);
    };
    const url = `${location.pathname}?${paramsFromUrl.toString()}`;
    navigate(url);
  }
// !Фильтрация конец
  const values = {
    createProduct,
    getProducts,
    getOneProduct,
    editProduct,
    deleteProduct,
    fetchByParams,
    products: state.products,
    oneProduct: state.oneProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
