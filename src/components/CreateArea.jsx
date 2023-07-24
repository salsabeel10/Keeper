import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const onhandleChange = (event) => {
    const { name, value } = event.target;
    setNote((prev) => ({...prev,[name]: value}));
  };
  const submitNote = (event) => {
    props.onAdd(note);
    setNote({title: "",content: ""});
    event.preventDefault();
  };
  const [expanded, setExpanded] = useState(false);
  const toggleExpand=()=>{
    setExpanded(true);

  }

  return (
    
      <form className="create-note">
        <input
          onClick={toggleExpand}
          onChange={onhandleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        {expanded && (
        <>
          <TextareaAutosize
            onChange={onhandleChange}
            name="content"
            placeholder="Take a note..."
            rows="3"
            value={note.content}
          />
        <Zoom in={expanded}>
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
        </>
        )}
      </form>
    
  );
}

export default CreateArea;
