import React from 'react';
import Button from './Button';

function Hero() {
  return (
    <section className="mt-16 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-20 text-3xl font-semibold max-md:mt-10 max-md:max-w-full">
            <h2 className="text-5xl text-zinc-800 max-md:max-w-full max-md:text-4xl ml-10 ">
              Task Management &<br /> <span className=''>To-Do List</span>
            </h2>
            <div className='mt-5 text-xl'>
            <p className="mt-18 mr-9 text-zinc-500 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full ml-11 ">
              This productive tool is designed to help <br /> you better manage your task project-wise <br /> conveniently!
            </p>
            </div>
            
            <div className='ml-10 mt-6 flex text-center '>
            <Button variant="primary">
              <span className='text-white text-end'>Let's Start</span>
              {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2044218b0421114ba662afe0b3cd4b7e044bfcef9b8cfdf81a239c759f379fff?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" alt="" className="shrink-0 aspect-square w-[31px] justify flex" /> */}
            </Button>
            </div>
            
          </div>
        </div>
        <div className="flex flex-col ml-32 w-4/12 max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f9d191fec4144755ed5e923b90e6ba895d3ea49d483f447bf52059ee3a69129?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" alt="Task management illustration" className="grow w-full aspect-[1.0] max-md:mt-6 max-md:max-w-full z-50" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
