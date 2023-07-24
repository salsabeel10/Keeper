import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Zoom } from "@mui/material";

const Note = ({ id, title, content, onDelete }) => {
  const handleClick = () => {
    onDelete(id);
  };
  return (
    <Zoom in={true}>
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}><DeleteIcon /></button>
    </div>
    </Zoom>
  );
};

export default Note;
