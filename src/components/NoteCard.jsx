import { Card, CardContent, Typography } from "@mui/material";

const NoteCard = ({ note, onClick }) => {
  return (
    <Card onClick={onClick}>
      <CardContent>
        <Typography variant="h6">{note.title}</Typography>
        <Typography variant="body2">
          {note.content || "(empty note)"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
