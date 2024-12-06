import { createContext , useState, useReducer} from "react";
import { reducer } from "../../reducers/reducer";
import { useEffect } from "react";
import axios from "axios";
import { ActionTypes } from "../../actions/actions";

export const initialState = {theme: "light", dentists: [], favDentist:[]}

export const ContextGlobal = createContext();



export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
   
  const url = "https://jsonplaceholder.typicode.com/users"
  const [state,dispatch] = useReducer(reducer,initialState);
  
  

  useEffect(() => {
    const getAllDentists = async () => {
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
            console.error('Error fetching dentistas:', error);
         }
   }
    getAllDentists();
  }, [])
  

  return (
    <ContextGlobal.Provider value={{state,dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
