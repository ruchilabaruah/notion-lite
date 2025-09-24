import { Card, CardContent, Typography } from "@mui/material";

const NoteCard = ({ note }) => {
  return (
    <Card>
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
