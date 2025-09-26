import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useLocalStorage("notes", []);

  const createNote = () => {
    const newNote = {
      id: Date.now(),
      title: `Untitled Note ${notes.length + 1}`,
      content: "",
    };
    setNotes([newNote, ...notes]);
    return newNote;
  };

  const updateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
  };

  // Delete note
  const deleteNote = (noteId) => {
    const filtered = notes.filter((note) => note.id !== noteId);
    setNotes(filtered);
  };

  return (
    <NotesContext.Provider value={{ notes, createNote, updateNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
};

export { NotesProvider, useNotes };
