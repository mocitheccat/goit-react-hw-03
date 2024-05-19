import { ContactForm, ContactList, SearchBox } from "../index.js";
// import initialContacts from "../../initialContacts.json";
import { useEffect, useState } from "react";
import initiateContacts from "../../initialContacts.js";
import css from "./App.module.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) || initiateContacts(8);
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const addContact = (newContact) => {
    setContacts((prevState) => {
      return [...prevState, newContact];
    });
  };

  const deleteContact = (id) => {
    setContacts((prevState) => {
      return prevState.filter((contact) => contact.id !== id);
    });
  };

  return (
    <div className={css.container}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm onAppend={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
