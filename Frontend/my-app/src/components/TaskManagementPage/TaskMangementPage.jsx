import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

function TaskManagementPage() {
  return (
    <div className="flex flex-col pt-6 bg-white scroll-m-0 snap-none">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default TaskManagementPage;