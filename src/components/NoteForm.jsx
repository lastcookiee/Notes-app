// src/components/NoteForm.js
import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && description) {
      const newNote = {
        id: Date.now(), // Unique ID based on timestamp
        title,
        description,
        date: new Date().toLocaleDateString(),
        bgColor: 'bg-white' // Default background color
      };
      addNote(newNote);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded-md w-full"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded-md w-full"
        rows="4"
        required
      />
      <button
  type="submit"
  className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:shadow-2xl hover:ring-4 hover:ring-blue-300"
>
  Add Note
</button>

    </form>
  );
};

export default NoteForm;
