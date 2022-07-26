import { useState } from "react";
import Input from "./input";

const FormInput = ({ updateNotes }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const createNote = (event) => {
    event.preventDefault();
    const timestamp = new Date().toISOString();

    updateNotes((notes) => [
      ...notes,
      { id: timestamp, title, body: note, archived: false, createdAt: timestamp },
    ]);
  };

  return (
    <div class="row d-flex justify-content-center py-5">
      <div class="col-8">
        <form onSubmit={createNote}>
          <h2 className="mb-3 text-center">Create a note</h2>
          <small class="d-flex justify-content-end mb-2 text-muted">
            Remaining characters: <span>{30 - title.length}</span>
          </small>
          <Input
            value={title}
            onChange={setTitle}
            type='text'
            placeholder='Title'
            id='title'
            name='title'
            required
          />
          <Input
            value={note}
            onChange={setNote}
            type='textarea'
            placeholder='Write your note'
            id='note'
            name='note'
            required
          />
          <Input type='submit' id='submit_form' class="btn btn-primary" name='submit_form' value='Create' />
        </form>
      </div>
    </div>
  );
};

export default FormInput;