import { createContext , useState,} from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [theme, setTheme] = useState("light");


  const [data, setData] = useState([
   
  ]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    document.documentElement.classList.toggle("dark");
  };

  return (
    <ContextGlobal.Provider value={{theme,toggleTheme,data}}>
      {children}
    </ContextGlobal.Provider>
  );
};
