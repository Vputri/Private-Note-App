import Card from "./card";

const Notes = ({ label, notes, setNotes }) => {
  return (
    <section className="mt-5">
      <h2 className="text-center mb-5">{label}</h2>
      {notes.length === 0 ? (
        <span>Tidak ada catatan.</span>
      ) : (
        <div className="row">
          {notes?.map((note) => (
            <div class="col-sm-6 d-flex align-self-stretch">
              <Card key={note.id} action={setNotes} {...note} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Notes;