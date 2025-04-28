import React from 'react';
import { useNavigate } from 'react-router-dom';

function CreateTaskButton() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/CreateTask`; 
    navigate(path);
  }
  return (
    <button className="flex gap-2 justify-center p-2 mt-4 text-xl font-medium text-white rounded-lg shadow-[0px_1px_8px_rgba(0,0,0,0.25)] max-md:px-5 bg-indigo-900" onClick={routeChange}>
      <div>Create new task</div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd72c32e43fc390272b5ebeac39a3b31400c3696b3230fc5576d8ce18616b605?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" className="shrink-0 w-6 aspect-square" alt="" />
    </button>
  );
}

export default CreateTaskButton;