import { useState } from "react";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NoteCard from "../components/NoteCard";
import useLocalStorage from "../hooks/useLocalStorage";
import NoteEditor from "../components/NoteEditor";
import { useThemeContext } from "../context/ThemeContext";

const Dashboard = () => {
  const [notes, setNotes] = useLocalStorage("notes", []);
  const { darkMode, setDarkMode } = useThemeContext();
  const [editingNote, setEditingNote] = useState(null);

  const createNote = () => {
    const newNote = {
      id: Date.now(),
      title: `Untitled Note ${notes.length + 1}`,
      content: "",
    };
    setNotes([newNote, ...notes]);
    setEditingNote(newNote);
  };

  const saveNote = (updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
  };

  // Delete note
  const deleteNote = (noteId) => {
    const filtered = notes.filter((note) => note.id !== noteId);
    setNotes(filtered);
    setEditingNote(null);
  };

  return (
    <Box className="p-6 min-h-screen">
      <Box className="flex justify-between items-center">
        <Typography variant="h4">My Notes</Typography>

        <Box className="flex gap-2">
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={createNote}
          >
            Create New Note
          </Button>
          <IconButton onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Box>

      {/* Notes Grid */}
      {notes.length === 0 ? (
        <Typography color="text.secondary">
          No notes yet. Click "Create New Note" to get started.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {notes.map((note) => (
            <Grid item xs={12} sm={6} md={4} key={note.id}>
              <NoteCard note={note} onClick={() => setEditingNote(note)} />
            </Grid>
          ))}
        </Grid>
      )}

      {/* Note Editor */}
      {editingNote && (
        <NoteEditor
          open={!!editingNote}
          note={editingNote}
          onClose={() => setEditingNote(null)}
          onSave={saveNote}
          onDelete={() => deleteNote(editingNote.id)}
        />
      )}
    </Box>
  );
};

export default Dashboard;
