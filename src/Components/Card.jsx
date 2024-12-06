import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {
  const { state } = useContext(ContextGlobal);
  const isLightTheme = state.theme === "light";
  const navigate = useNavigate();

 
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.some((fav) => fav.id === id);
  });


  const toggleFavorite = (e) => {
    e.stopPropagation(); 
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      const updatedFavorites = favorites.filter((fav) => fav.id !== id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      const newFavorite = { name, username, id };
      localStorage.setItem("favorites", JSON.stringify([...favorites, newFavorite]));
    }
    setIsFavorite(!isFavorite);
  };

  
  const handleCardClick = () => {
    navigate(`/dentist/${id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className={`card max-w-sm border rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 
        ${!isLightTheme ? "bg-gray-900 border-gray-700 text-gray-200 hover:shadow-lg" : "bg-white border-gray-300 text-gray-800 hover:shadow-md"}`}
    >
     
      <img
        src="./images/doctor.jpg"
        alt={`Avatar of ${name}`}
        className="w-full h-40 object-cover"
      />

     
      <div className="p-4 flex flex-col items-center relative">
        <h2 className={`text-xl font-bold mb-2 ${!isLightTheme ? "text-gray-100" : "text-gray-800"}`}>
          {name}
        </h2>
        <p className={`text-sm ${!isLightTheme ? "text-gray-400" : "text-gray-500"}`}>
          @{username}
        </p>
        <p className={`text-sm mt-1 ${!isLightTheme ? "text-gray-300" : "text-gray-600"}`}>
          ID: {id}
        </p>

      
        <button
          onClick={toggleFavorite}
          className="absolute top-4 right-4 text-lg"
        >
          <i
            className={`fas fa-heart ${
              isFavorite
                ? "text-red-500"
                : `${!isLightTheme ? "text-gray-400" : "text-gray-500"}`
            } transition-all duration-300 hover:scale-110`}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
