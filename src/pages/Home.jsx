import React, { useEffect, useContext, useState } from "react";
import { ContextGlobal } from "../components/utils/global.context";
import Card from "../components/Card";

const Home = () => {
  const { state } = useContext(ContextGlobal);
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    setDentists(state.dentists);
  }, [state.dentists]);

  // Obtener el tema actual
  const isLightTheme = state.theme === 'light'?true:false;

  return (
    <main
      className={`min-h-screen p-8 transition-all duration-300 ${
        !isLightTheme ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
      }`}
    >
      <h1 className="text-3xl font-bold text-center mb-8">Home</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Renderizar las tarjetas */}
        {dentists?.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
            
          />
        ))}
      </div>
    </main>
  );
};

export default Home;

