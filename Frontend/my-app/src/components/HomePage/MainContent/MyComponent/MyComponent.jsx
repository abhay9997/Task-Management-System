import React from 'react';
import SearchBar from './SearchBar';
import ActionButton from './ActionButton';
import CreateNewButton from './CreateNewButton';

const actionButtons = [
  { text: 'Calendar view', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5095d261cc32f08a4739e6805dcad35dc86afaaf3ef1d412d86b988b66619506?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833' },
  { text: 'Automation', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/546fa84c035dc719dde55b7380e297d21e2a9e117d3b19cb86e59ec7f2778280?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833' },
  { text: 'Filter', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b99683edcf97cb916f1443315cd10d3bb558a97f75f93d67aba4ea54919e2ecb?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833' },
  { text: 'Share', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cd48bd7ab9e3b4437119ce5324f4697e9aead0b138b83da75a72fac0888fd903?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833' }
];

function MyComponent() {
  return (
    <header className="flex gap-5 justify-between text-base max-md:flex-wrap">
      <SearchBar />
      <nav className="flex gap-4 max-md:flex-wrap">
        <div className="flex gap-4 px-5 text-neutral-500 max-md:flex-wrap">
          {actionButtons.map((button, index) => (
            <ActionButton key={index} text={button.text} iconSrc={button.iconSrc} />
          ))}
        </div>
        <CreateNewButton />
      </nav>
    </header>
  );
}

export default MyComponent;