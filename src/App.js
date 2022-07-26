import { useState, useEffect } from "react";
import { FormInput, Header, Notes, Footer } from "./components";
import { getInitialData } from "./utils";

function App() {
  const [query, setQuery] = useState("");
  const [searchNotes, setSearchNotes] = useState([]);
  const [notes, setNotes] = useState(getInitialData());

  const activeNotes = (searchNotes || notes).filter((note) => !note.archived);
  const archivedNotes = (searchNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNotes(notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
  }, [query, notes]);

  return (
    <>
      <section className="px-5 py-5 bg-info text-white">
        <Header search={query} updateQuery={setQuery} updateNotes={setNotes} />
        <main class="px-5">
          <FormInput updateNotes={setNotes} />
          <Notes label='Active Notes' notes={activeNotes} setNotes={setNotes} />
          <Notes label='Archived Notes' notes={archivedNotes} setNotes={setNotes} />
        </main>
      </section>
      <Footer/>
    </>
  );
}

export default App;