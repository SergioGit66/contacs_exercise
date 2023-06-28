import './App.css';
import contactsJSON from "./contacts.json"
import { useState } from 'react';

function App() {
  const firstFiveContacts = contactsJSON.slice(0, 5);
  const [contacts, setContacts] = useState(firstFiveContacts);

  const addRandomContact = () => {
    const randomPosition = Math.floor(Math.random() * contactsJSON.length);
    const randomContact = contactsJSON[randomPosition];

    contacts.map((contact) => {
      let uploadContacts;

      if (randomContact.id != contact.id) {
        uploadContacts = [...contacts, randomContact]
        setContacts(uploadContacts);
      }
    })
  }

  
  function sortByPopularity() {
    const sortContactsPopularity = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(sortContactsPopularity)
  }
  function sortByName() {
    const sortContactsName = [...contacts].sort((a, b) => a.name > b.name ? 1 : -1,);
    setContacts(sortContactsName)
  }

  function ContactsList() {
    const [contacts, setContacts] = useState(contacts);
    const deleteContact = contactsId => {
      const filteredContacs = contacts.filter(contacts => {
        return contacts.id !== contactsId;
      });
      setContacts(filteredContacs);
    }}



return (
  <div className="App">
    <div className='buttonsList' >
    <button onClick={addRandomContact}> Add Random Contact</button>
    <button onClick={sortByPopularity}> Sort by popularity</button>
    <button onClick={sortByName}> Sort by name</button>
    <button onClick={() => deleteContact(contacts.id)} className='btn-delete'>Delete Contact</button>
    </div>
    

    <table>
      <tbody>
        <tr>
          <th> Picture </th>
          <th> Name </th>
          <th> Popularity</th>
          <th> Won Oscar</th>
          <th> Won Emmy</th>



        </tr>
        {contacts.map((contact) => {

          return (
            <tr key={contact.id}>
              <td> <img src={contact.pictureUrl} /></td>
              <td> {contact.name} </td>
              <td> {contact.popularity} </td>
              <td>{(contact.wonOscar) ? <img src='https://cdn.mos.cms.futurecdn.net/xdNv5FjgahgnvV7RmMedWD-320-80.jpg' /> : <img src='https://nicolesymmonds.files.wordpress.com/2015/01/no_oscar.jpg' />}</td>
              <td>{(contact.wonEmmy) ? <img src='https://media.istockphoto.com/id/937808156/es/vector/icono-de-bot%C3%B3n-verde-s%C3%AD-s%C3%ADmbolo-de-ok-vector-de.jpg?s=612x612&w=0&k=20&c=gfjM0uBb4B8gW_qBUeju6iv91LGRGQJM5l6b6qro4D4=' /> : <img src='https://provialmex.com.mx/wp-content/uploads/2022/12/simbolo-de-no-estacionarse.webp' />}</td>

            </tr>

          )
        })}
      </tbody>

    </table>

  </div>
);
}

export default App;