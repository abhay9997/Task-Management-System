import React from "react";
import Header from "./Header";
import PropertyList from "./PropertyList";
import AddCustomProperty from "./AddCustomProperty";
import ContentArea from "./ContentArea";
// import PropertyItem from "./PropertyItem";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function CreateTask() {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/')
    }
  },[navigate])
  return (
    <main className="flex flex-col pt-4 pb-20 bg-white max-w-[670px]">
      <div className="flex flex-col px-6 w-full max-md:px-5 max-md:max-w-full">
        <Header />
        <PropertyList />
        {/* <PropertyItem /> */}
        <AddCustomProperty />
        <hr className="shrink-0 mt-8 h-px bg-neutral-200 max-md:max-w-full" />
        <ContentArea />
      </div>
    </main>
  );
}

export default CreateTask;