import React from 'react';
import Header from '../Header';
import FeatureCards from '../FeatureCards';
import TaskBoard from '../TaskBoard';

import MyComponent from './MyComponent';

function MainContent() {
  return (
    <main className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-6 max-md:mt-10 max-md:max-w-full">
        <Header />
        <FeatureCards />
        <div className='mt-3'>
        <MyComponent/>
        </div>
        
        <TaskBoard />
      </div>
    </main>
  );
}

export default MainContent;