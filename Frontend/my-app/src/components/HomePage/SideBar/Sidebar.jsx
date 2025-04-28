import React from 'react';
import UserProfile from './UserProfile';
import NavigationMenu from './NavigationMenu';
import CreateTaskButton from './CreateTaskButton';
import DownloadAppPrompt from './DownloadAppPrompt';

function Sidebar() {
  return (
    <aside className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-4 pt-6 pb-7 mx-auto w-full bg-white border-r border-neutral-200 max-md:mt-4">
        <UserProfile />
        <NavigationMenu />
        <CreateTaskButton />
        <DownloadAppPrompt />
      </div>
    </aside>
  );
}

export default Sidebar;