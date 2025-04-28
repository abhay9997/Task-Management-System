import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';

function UserProfile() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {

        const userId = localStorage.getItem('user_id');
        if (!userId) {
          console.error('No user ID found');
          return;
        }
        const response = await axios.get(`http://localhost:5500/api/getUser?userId=${userId}`);


        setUsername(response.data.name);
      } catch (error) {
        console.error('Error fetching user', error);
      }
    };

    fetchUser();
  }, []);


  const handleLogout = async (e) => {
    try {

      // Remove the token from localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user_id')

      // Navigate the user to the login page or homepage
      navigate('/');

      // Provide user feedback
      alert('Successfully logged out.');

    } catch (error) {
      console.error('Logout failed:', error);
      alert('Logout failed. Please try again.');
    }
  };
  return (
    <>
      <div className="flex gap-2 text-xl font-medium text-zinc-950">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b8fadfa6bc31b5f2e6a876920eebb01d21d53be7e346484b99f61dca0c8bc0b?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" className="shrink-0 rounded-lg aspect-square w-[31px]" alt="User avatar" />
        <div className="my-auto ml-2 capitalize">{username}</div>
      </div>
      <div className="flex gap-0.5 justify-between mt-2 w-full">
        <div className="flex gap-5 my-auto">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a49ce09407740e5eb3d2388987cb2518824d776750fad0de4aed60e5e732ae8?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" className="shrink-0 w-6 aspect-square" alt="" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/42a9843a172899f9c43e171614ce1b53f0c796555622e6e2e760529ed702bbba?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" className="shrink-0 w-6 aspect-square" alt="" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d160eaae9596508c30339ed5459c1f85594e164a5f4019ae67f98b791f65269c?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" className="shrink-0 w-6 aspect-square" alt="" />
        </div>
        <button className="p-2 text-base whitespace-nowrap rounded bg-zinc-100 text-neutral-500" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
}

export default UserProfile;
