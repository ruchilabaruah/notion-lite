import { Card, CardContent, Typography } from "@mui/material";

const NoteCard = ({ note, onClick }) => {
  return (
    <Card onClick={onClick} className="cursor-pointer">
      <CardContent>
        <Typography variant="h6">{note.title}</Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="line-clamp-3"
        >
          {note.content || "(empty note)"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
