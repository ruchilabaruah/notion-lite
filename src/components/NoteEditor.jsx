import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";

const NoteEditor = ({ open, note, onClose, onSave }) => {
  const [title, setTitle] = useState(note?.title || "");

  const editor = useEditor({
    extensions: [StarterKit],
    content: note?.content || "",
  });

  const handleSave = () => {
    // Save logic here
    onSave({ ...note, title, content: editor.getHTML() });
    onClose();
  };

  useEffect(() => {
    if (note && editor) {
      setTitle(note.title || "");
      editor?.commands.setContent(note.content || "");
    }
  }, [note, editor]);

  if (!editor) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Edit Note</DialogTitle>
      {/* Title field */}
      <DialogContent>
        <TextField
          label="Title"
          fullWidth
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </DialogContent>
      <DialogContent>
        <div className="border rounded p-3 min-h-[200px]">
          <EditorContent editor={editor} />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NoteEditor;
