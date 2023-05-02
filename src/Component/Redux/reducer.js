import React from 'react';
import {GET_RES_DATA_REQUEST,GET_RES_DATA_SUCCESS, GET_RES_DATA_FAILURE} from "./actiontype";

const initialState = {
  loading: false,
  products: [],
  error: false
};

const reducer = (state = initialState,{type,payload}) => {
  switch (type) {
    case GET_RES_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_RES_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: payload,
      };
    }
    case GET_RES_DATA_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    default:
      return state;
   }

};

export { reducer };