import { showFormattedDate } from "../utils";
import Button from "./button";

const Card = ({ id, title, createdAt, body, archived, action }) => {
  const deleteNote = (item) => action((notes) => notes.filter((note) => note.id !== item));
  const toggleArchive = (item) => {
    action((notes) =>
      notes.map((note) => {
        if (note.id === item) {
          return { ...note, archived: !note.archived };
        }
        return note;
      }),
    );
  };

  return (
    <div id={id} className="card mb-3">
      <div className="card-body text-dark">
        <h3>{title}</h3>
        <small>{showFormattedDate(createdAt)}</small>
        <p className="note">{body}</p>
        <Button eventHandler={() => deleteNote(id)} label='delete' />
        <Button
          eventHandler={() => toggleArchive(id)}
          label={archived ? "unarchived" : "archive"}
        />
      </div>
    </div>
  );
};

export default Card;