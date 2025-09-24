import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const NoteEditor = ({ open, note, onClose, onSave }) => {
  const handleSave = () => {
    // Save logic here
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Edit Note</DialogTitle>
      <DialogContent>
        <div className="border rounded p-3 min-h-[200px]">
          {/** Will show Tiptap editor here */}
          Test note
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
