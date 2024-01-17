import React from "react";
import axios from "axios";
import { ACTION_PRODUCTS, API_PRODUCTS } from "../../helpers/const";
import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

const productContext = createContext();

export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_PRODUCTS.GET_PRODUCTS:
      return { ...state, products: action.payload.data };
    case ACTION_PRODUCTS.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //! CREATE
  const createProduct = async (newProduct) => {
    try {
      await axios.post(API_PRODUCTS, newProduct);
    } catch (error) {
      console.error();
    }
  };

  //! READ
  const getProducts = async () => {
    try {
      let res = await axios(API_PRODUCTS);
      dispatch({
        type: ACTION_PRODUCTS.GET_PRODUCTS,
        payload: res,
      });
    } catch (error) {
      console.error();
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

  const values = {
    createProduct,
    getProducts,
    getOneProduct,
    editProduct,
    deleteProduct,
    products: state.products,
    oneProduct: state.oneProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
