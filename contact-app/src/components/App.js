import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import Header from "./Header"
import "./App.css"

function App() {
  const Local_Storage_Key = "contacts";
  const [contacts, setContacts] = useState([]);

  const AddContactHandler = (contact) => {
    console.log(contact)
    // console.log(uuid());
    setContacts([...contacts, contact]);
  };

  // const removeContactHandler = (id) => {
  //   const newContactList = contacts.filter((contact) => {
  //     return contact.id !== id;
  //   });
  //   setContacts(newContactList);
  // };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(Local_Storage_Key));
    if (retriveContacts) setContacts(retriveContacts);
  }, [])

  useEffect(() => {
    localStorage.setItem(Local_Storage_Key, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact AddContactHandler={AddContactHandler} />
      <ContactList contacts={contacts} />
    </div>

  );
}

export default App;
