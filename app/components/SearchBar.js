// SearchBar.js
import React from 'react';
import { LuSearch } from 'react-icons/lu';

const SearchBar = () => {
  return (
    <div className="hidden md:flex  bg-gray-100 p-1 w-72 h-10 space-x-4 rounded-lg items-center ml-5">
      <LuSearch className="text-2xl ml-2" />{' '}
      <input
        className="bg-gray-100 outline-none placeholder-opacity-50 placeholder-text-[#081225] text-sm antialiased placeholder-font-normal"
        type="text"
        placeholder="Search something"
      />
    </div>
  );
};

export default SearchBar;
