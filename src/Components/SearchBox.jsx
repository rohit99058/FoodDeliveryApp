import React from 'react';

const SearchBox = () => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
      <input
        type="text"
        className="flex-grow p-2 outline-none"
        placeholder="Search..."
      />
      <button className="p-2 bg-blue-500 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.293 12.293a8 8 0 111.414-1.414l4.146 4.147a1 1 0 01-1.415 1.415l-4.147-4.146zm-1.414 0a6 6 0 100-8.487 6 6 0 000 8.487z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBox;
