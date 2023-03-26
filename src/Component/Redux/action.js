import axios from "axios"
import {GET_RES_DATA_REQUEST,GET_RES_DATA_SUCCESS, GET_RES_DATA_FAILURE} from "./actiontype";

const appThunkActionCreator = (page,sort,order,category,city) => {
  console.log(sort, order)
    return (dispatch) => {
       dispatch({
            type:GET_RES_DATA_REQUEST,
            payload: true,
        });
        axios.get(`https://wild-rose-cape-buffalo-kit.cyclic.app/restaurants?_page=${page}&_limit=12&_sort=${sort}&_order=${order}&category_like=${category}&City_like=${city}`)
        .then((res)=>{
         //console.log("aaaa",res.data);   
         if (res.data) {  
          return  dispatch({
              type: GET_RES_DATA_SUCCESS,
              payload: res.data,
            });
          } else {
          return dispatch({
              type: GET_RES_DATA_FAILURE,
              payload: true,
            });
          }

        }).catch((e) => {
        console.log(e);
      });
    }
}

const filterData = (data) => {
  return (dispatch) => {
     dispatch({
          type:GET_RES_DATA_REQUEST,
          payload: true,
      });
      axios.get(`https://wild-rose-cape-buffalo-kit.cyclic.app/restaurants?_page=&_limit=15&q=${data}`)
      .then((res)=>{
       //console.log("aaaa",res.data);   
       if (res.data) {  
        return  dispatch({
            type: GET_RES_DATA_SUCCESS,
            payload: res.data,
          });
        } else {
        return dispatch({
            type: GET_RES_DATA_FAILURE,
            payload: true,
          });
        }

      }).catch((e) => {
      console.log(e);
    });
  }
}

export {appThunkActionCreator,filterData};