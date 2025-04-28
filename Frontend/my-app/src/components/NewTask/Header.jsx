import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const routeChange = () =>{
    let path= `/UserPage`;
    navigate(path);
  }
  
  return (
    <header className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-4 my-auto">
        <button onClick={routeChange} ><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2eb210958d0a9ab380b2a1ff9c5a0e9d36129be76a5cf1e9d3b9a1880fa46119?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" className="shrink-0 w-6 aspect-square to-black" alt="" /></button>
        
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b6d5c3d915c4c93c4d6a239520168403ad35e561f5e1416751a1846661a3c9d?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" className="shrink-0 w-6 aspect-square" alt="" />
      </div>
      <nav className="flex gap-4 text-base whitespace-nowrap text-neutral-500">
        <button className="flex gap-3.5 p-2 rounded bg-zinc-100">
          <span className="my-auto">Share</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd48bd7ab9e3b4437119ce5324f4697e9aead0b138b83da75a72fac0888fd903?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" className="shrink-0 w-6 aspect-square" alt="" />
        </button>
        <button className="flex gap-3.5 p-2 rounded bg-zinc-100">
          <span className="my-auto">Favorite</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/74bd56b2b77deaa759b92cf5455ae524299276b2b8f4fc1daf386fb04ac9ea48?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" className="shrink-0 w-6 aspect-square" alt="" />
        </button>
      </nav>
    </header>
  );
}

export default Header;