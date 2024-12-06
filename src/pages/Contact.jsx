import React, { useContext } from 'react';
import Form from '../components/Form';
import { ContextGlobal } from '../components/utils/global.context';

const Contact = () => {
  const { state } = useContext(ContextGlobal); 

  
  const isLightTheme = state.theme === 'light' ? true : false;

  return (
    <div
      className={` p-8 transition-all duration-300 ${
        !isLightTheme ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
      }`}
    >
      <h2 className="text-3xl font-semibold mb-4">Want to know more?</h2>
      <p className="text-lg mb-8">Send us your questions and we will contact you</p>
      
      <Form />
    </div>
  );
};

export default Contact;
