import React from 'react';

const NoteModal = ({ note, onClose, onDelete }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-lg w-full z-10">
        <h2 className="text-2xl font-bold mb-4 break-words">{note.title}</h2>
        <p className="text-gray-700 mb-4 break-words">{note.description}</p>
        <div className="flex justify-end space-x-4 mt-4">
          <button
            onClick={onDelete}
            className="bg-red-500 text-white py-2 px-4 rounded shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-red-600"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white py-2 px-4 rounded shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
      <div
        className="fixed inset-0 bg-black opacity-30"
        onClick={onClose}
      />
    </div>
  );
};

export default NoteModal;
