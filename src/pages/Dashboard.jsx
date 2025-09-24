import { Box, Button, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NoteCard from "../components/NoteCard";
import useLocalStorage from "../hooks/useLocalStorage";
import { useState } from "react";
import NoteEditor from "../components/NoteEditor";

const Dashboard = () => {
  const [notes, setNotes] = useLocalStorage("notes", []);
  const [editingNote, setEditingNote] = useState(null);

  const createNote = () => {
    const newNote = {
      id: Date.now(),
      title: `Untitled Note ${notes.length + 1}`,
      content: "",
    };
    setNotes([newNote, ...notes]);
  };

  const saveNote = (updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
  };

  return (
    <Box className="p-6">
      <Box className="flex justify-between items-center">
        <Typography variant="h4">My Notes</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={createNote}
        >
          Create New Note
        </Button>
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
        />
      )}
    </Box>
  );
};

export default Dashboard;
