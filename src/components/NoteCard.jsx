import React from 'react';

const NoteCard = ({ title, description, date, bgColor, onClick, onDelete, onRestore, restoreMode }) => {
  return (
    <div 
      className={`p-4 rounded-lg ${bgColor} cursor-pointer overflow-hidden`} 
      onClick={onClick}
    >
      <h3 className="text-xl font-bold mb-2 truncate">{title}</h3>
      <p className="text-gray-700 mb-2 overflow-hidden text-ellipsis whitespace-normal">{description}</p>
      <p className="text-gray-500 mb-4">{date}</p>
      {restoreMode ? (
        <div className="flex space-x-2">
          <button
            onClick={(e) => { e.stopPropagation(); onRestore(); }}
            className="bg-blue-500 text-white py-1 px-2 rounded shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600"
          >
            Restore
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onDelete(); }}
            className="bg-red-500 text-white py-1 px-2 rounded shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-red-600"
          >
            Delete Permanently
          </button>
        </div>
      ) : (
        <button
          onClick={(e) => { e.stopPropagation(); onDelete(); }}
          className="bg-red-500 text-white py-1 px-2 rounded shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-red-600"
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default NoteCard;
