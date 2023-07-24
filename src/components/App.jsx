import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import "./styles/styles.css"

function App() {
  const [notes, setNotes] = useState([]);

  const Addnote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const DeleteNote = (id) => {
    setNotes((prev) => prev.filter((_, index) => index !== id));
  };
  return (
    <div>
      <Header />
      <CreateArea onAdd={Addnote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={DeleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
