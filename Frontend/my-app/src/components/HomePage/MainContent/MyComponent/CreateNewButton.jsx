import React from 'react';
import { useNavigate } from 'react-router-dom';
const CreateNewButton = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/CreateTask`; 
    navigate(path);
  }
  return (
    <button className="flex gap-2 justify-center p-2 font-medium text-white rounded-lg shadow-[0px_1px_8px_rgba(0,0,0,0.25)] bg-indigo-800" onClick={routeChange}>
      <span className="my-auto">Create new</span>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/81a7bce4b65d2e2a5ef6c164066c6011d4bb23f98c8599367a1169bb565939b9?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" alt="" className="shrink-0 w-6 aspect-square" />
    </button>
  );
};

export default CreateNewButton;