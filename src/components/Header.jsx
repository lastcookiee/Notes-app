import React, { useState } from 'react';

const Header = ({ onMyNotesClick, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
      <h1
        onClick={onMyNotesClick}
        className="text-3xl font-bold cursor-pointer text-white bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400"
        style={{ fontFamily: "'Baskervville SC', serif" }} // Apply the Baskervville SC font
      >
        MY NOTES
      </h1>
      <div className="flex items-center space-x-6">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search"
          className="border p-2 rounded-md bg-white text-black"
        />
        <div className="flex items-center">
          <span className="text-lg font-semibold text-gray-100">
            Kunal Singh
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
