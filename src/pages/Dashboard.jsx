import { useState } from "react";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NoteCard from "../components/NoteCard";
import NoteEditor from "../components/NoteEditor";
import { useTheme } from "../context/ThemeContext";
import { useNotes } from "../context/NotesContext";

const Dashboard = () => {
  const [editingNote, setEditingNote] = useState(null);
  const { darkMode, setDarkMode } = useTheme();
  const { notes, createNote } = useNotes();

  const handleCreateNote = () => {
    const newNote = createNote();
    setEditingNote(newNote);
  };

  return (
    <Box className="p-6 min-h-screen">
      <Box className="flex justify-between items-center">
        <Typography variant="h4">My Notes</Typography>
        <Box className="flex gap-2">
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleCreateNote}
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
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 py-4">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onClick={() => setEditingNote(note)}
            />
          ))}
        </div>
      )}

      {/* Note Editor */}
      {editingNote && (
        <NoteEditor
          open={!!editingNote}
          note={editingNote}
          onClose={() => setEditingNote(null)}
        />
      )}
    </Box>
  );
};

export default Dashboard;
