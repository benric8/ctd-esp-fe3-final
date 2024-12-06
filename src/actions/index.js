import axios from "axios";
import { ActionTypes } from "./actions";

const url="https://jsonplaceholder.typicode.com/users";

export const getAllDentists = async (dispatch) => {
    console.log("dentro de la funcion")
       try {
          await axios.get(`${url}`)
             .then(({ data }) => {
                 dispatch({
                   type: ActionTypes.GET_ALL_DENTIST,
                   payload: data
                });
             })
       } catch (error) {
           dispatch({
             type: GET_ALL_DENTISTS_FAILURE,
             payload: error.message,
          })
       }
 }
