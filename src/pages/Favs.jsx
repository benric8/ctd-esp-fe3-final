import React, { useEffect, useState, useContext } from "react";
import { ContextGlobal } from "../components/utils/global.context";
import Card from "../components/Card";

const Favs = () => {

  const { state } = useContext(ContextGlobal);
  const [favDentists, setFavDentists] = useState([]);

  useEffect(() => {

    const storedDentists = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavDentists(storedDentists);
  }, []);

  const handleDeleteFavs = (favorites) => {
    setFavDentists(favorites);
  }
  const isLightTheme = state.theme === 'light' ? true : false;

  return (
    <main
      className={`min-h-screen p-8 transition-all duration-300 ${!isLightTheme ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
        }`}
    >
      <h1 className="text-3xl font-bold text-center mb-8">Dentists Favs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {favDentists.length > 0 ? (
          favDentists.map((dentist) => (
            <Card
              key={dentist.id}
              name={dentist.name}
              username={dentist.username}
              id={dentist.id}
              deleteFavs={handleDeleteFavs}
            />
          ))
        ) : (
          <p className="text-center text-lg">No favorites found.</p>
        )}
      </div>
    </main>
  );
};

export default Favs;
