import React from 'react';

const Sidebar = ({ onTrashClick }) => {
  return (
    <div className="w-full lg:w-64 bg-gradient-to-b from-gray-700 to-gray-900 p-6 flex flex-col h-screen">
      {/* Grab a cookiee Button */}
      <div className="mb-10">
        <a
          href="https://youtu.be/dQw4w9WgXcQ?si=buN4TOlXahxHGDdE"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 text-white py-2 px-4 rounded-2xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-yellow-600 hover:text-yellow-100 hover:ring-2 hover:ring-yellow-300"
        >
          Grab a cookiee🍪
        </a>
      </div>

      {/* Trash Button */}
      <div className="flex-grow flex flex-col justify-end">
        <button
          onClick={onTrashClick}
          className="bg-red-500 text-white py-2 px-4 rounded-3xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-red-600 hover:text-red-100 hover:ring-2 hover:ring-red-300"
        >
          Deleted Notes
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
