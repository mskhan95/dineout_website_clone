import axios from "axios"
import {GET_RES_DATA_REQUEST,GET_RES_DATA_SUCCESS, GET_RES_DATA_FAILURE} from "./actiontype";

const appThunkActionCreator = (page,sort,order) => {
    return (dispatch) => {
       dispatch({
            type:GET_RES_DATA_REQUEST,
            payload: true,
        });
        axios.get(`https://wild-rose-cape-buffalo-kit.cyclic.app/restaurants?_page=${page}&_limit=15_sort=${sort}&_order=${order}`)
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
export {appThunkActionCreator};