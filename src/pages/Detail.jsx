import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ContextGlobal } from '../components/utils/global.context';
import { useParams } from 'react-router';

const Detail = () => {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const {state} = useContext(ContextGlobal);
  const {id} = useParams();
  const isLightTheme = state.theme === "light";
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>User not found.</p>;
  }

  
  const themeClasses = !isLightTheme? 'bg-gray-800 text-white' : 'bg-white text-black';

  return (
    <div className={`p-4 ${themeClasses}`}>
      <h1 className="text-2xl font-bold mb-4">Detail of User {user.name}</h1>
      <div className="space-y-2">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
      </div>
      <div className="mt-4">
        <h2 className="font-semibold">Address:</h2>
        <p>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
      </div>
      <div className="mt-4">
        <h2 className="font-semibold">Company:</h2>
        <p>{user.company.name} - {user.company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default Detail;
