import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';



function Header() {
  const [username, setUsername] = useState('');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {

        const userId = localStorage.getItem('user_id');
        if (!userId) {
          console.error('No user ID found');
          return;
        }
        const response = await axios.get(`http://localhost:5500/api/getUser?userId=${userId}`);

        const fullName = response.data.name;

        // Split the full name to get the first name
        const firstName = fullName.split(' ')[0];
        setUsername(firstName);
        const now = new Date();
        const hours = now.getHours();

        let timeGreeting;
        if (hours < 12) {
          timeGreeting = 'Good Morning';
        } else if (hours < 18) {
          timeGreeting = 'Good Afternoon';
        } else {
          timeGreeting = 'Good Evening';
        }
        setGreeting(timeGreeting);

      } catch (error) {
        console.error('Error fetching user', error);
      }
    };

    fetchUser();
  }, []);




  return (
    <header className="flex gap-5 justify-between w-full text-zinc-950 max-md:flex-wrap max-md:max-w-full">
      <h1 className="text-5xl font-semibold max-md:text-4xl capitalize">
        {greeting},{username}!
      </h1>
      <div className="flex gap-2 my-auto text-base">
        <div className="my-auto">Help & feedback</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/39812b1d696ff57cd53ea16de6439d1c3030e15c64c6b710ec0a098e6d194555?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" className="shrink-0 w-6 aspect-square" alt="" />
      </div>
    </header>
  );
}

export default Header;
