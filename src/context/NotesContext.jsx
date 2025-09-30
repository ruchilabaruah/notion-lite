import { createContext, useContext, useEffect, useReducer } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { ACTIONS, notesReducer } from "./notesReducer";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [savedNotes, setSavedNotes] = useLocalStorage("notes", []);
  const [notes, dispatch] = useReducer(notesReducer, savedNotes);

  useEffect(() => {
    setSavedNotes(notes);
  }, [notes, setSavedNotes]);

  const createNote = () => {
    const newNote = {
      id: Date.now(),
      title: `Untitled Note ${savedNotes.length + 1}`,
      content: "",
    };
    dispatch({ type: ACTIONS.CREATE, payload: newNote });
    return newNote;
  };

  const updateNote = (updatedNote) => {
    dispatch({ type: ACTIONS.UPDATE, payload: updatedNote });
  };

  const deleteNote = (noteId) => {
    dispatch({ type: ACTIONS.DELETE, payload: noteId });
  };

  return (
    <NotesContext.Provider
      value={{ notes: savedNotes, createNote, updateNote, deleteNote }}
    >
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
