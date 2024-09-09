import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import NoteCard from './components/NoteCard';
import NoteForm from './components/NoteForm';
import NoteModal from './components/NoteModal';

function App() {
  // Initialize notes from localStorage, or use an empty array if nothing is found
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [deletedNotes, setDeletedNotes] = useState(() => {
    const savedDeletedNotes = localStorage.getItem('deletedNotes');
    return savedDeletedNotes ? JSON.parse(savedDeletedNotes) : [];
  });
  const [viewMode, setViewMode] = useState('notes');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);

  // Save notes to localStorage whenever notes or deletedNotes change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.setItem('deletedNotes', JSON.stringify(deletedNotes));
  }, [notes, deletedNotes]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const noteToDelete = notes.find(note => note.id === id);
    setNotes(notes.filter(note => note.id !== id));
    if (noteToDelete) {
      setDeletedNotes([...deletedNotes, noteToDelete]);
    }
  };

  const restoreNote = (id) => {
    const noteToRestore = deletedNotes.find(note => note.id === id);
    if (noteToRestore) {
      setNotes([...notes, noteToRestore]);
      setDeletedNotes(deletedNotes.filter(note => note.id !== id));
    }
  };

  const permanentlyDeleteNote = (id) => {
    setDeletedNotes(deletedNotes.filter(note => note.id !== id));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  const handleCloseModal = () => {
    setSelectedNote(null);
  };

  const handleDeleteNote = (id) => {
    deleteNote(id);
    handleCloseModal();
  };
  const filteredNotes = notes.filter(note =>
    (note.title && note.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (note.description && note.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const filteredDeletedNotes = deletedNotes.filter(note =>
    (note.title && note.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (note.description && note.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar
        onTrashClick={() => setViewMode('trash')}
      />
      <main className="flex-grow p-6">
        <Header
          onMyNotesClick={() => setViewMode('notes')}
          onSearch={handleSearch}
        />
        <div className="p-6">
          {/* Form to Create New Note */}
          {viewMode === 'notes' && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold mb-4">Create New Note</h2>
              <NoteForm addNote={addNote} />
            </section>
          )}

          {/* Display Notes or Deleted Notes */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">{viewMode === 'trash' ? 'Deleted Notes' : 'My Notes'}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {viewMode === 'trash' ? (
                filteredDeletedNotes.length > 0 ? (
                  filteredDeletedNotes.map(note => (
                    <NoteCard
                      key={note.id}
                      title={note.title}
                      description={note.description}
                      date={note.date}
                      bgColor={note.bgColor}
                      onDelete={() => permanentlyDeleteNote(note.id)}
                      onRestore={() => restoreNote(note.id)}
                      restoreMode={true}
                      onClick={() => handleNoteClick(note)}
                    />
                  ))
                ) : (
                  <p>No deleted notes.</p>
                )
              ) : (
                filteredNotes.length > 0 ? (
                  filteredNotes.map(note => (
                    <NoteCard
                      key={note.id}
                      title={note.title}
                      description={note.description}
                      date={note.date}
                      bgColor={note.bgColor}
                      onDelete={() => deleteNote(note.id)}
                      onClick={() => handleNoteClick(note)}
                    />
                  ))
                ) : (
                  <p>No notes found.</p>
                )
              )}
            </div>
          </section>
        </div>
        {selectedNote && (
          <NoteModal
            note={selectedNote}
            onClose={handleCloseModal}
            onDelete={() => handleDeleteNote(selectedNote.id)}
          />
        )}
      </main>
    </div>
  );
}

export default App;
