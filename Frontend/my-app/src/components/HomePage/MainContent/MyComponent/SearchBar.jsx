import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex gap-3.5 justify-between p-2 whitespace-nowrap bg-white rounded-lg border border-gray-200 border-solid text-neutral-500">
      <label htmlFor="searchInput" className="sr-only">Search</label>
      <input
        id="searchInput"
        type="text"
        placeholder="Search"
        className="my-auto bg-transparent border-none outline-none"
      />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2bc8a92eee35a532eb03d9ca7809ab0a8effa3a7b8045d0d29543134150fcdd?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" alt="" className="shrink-0 w-6 aspect-square" />
    </div>
  );
};

export default SearchBar;