import './App.css';
import React, { useState } from "react";
import Title from './components/title';
import EventLists from './components/eventLists';
import Modal from './components/modal'
import AddItemsForm from './components/addItemsForm'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [lists, showLists] = useState([])

  const addItem = (list) => {
    showLists((prevLists) => {
      return [...prevLists, list]
    })
    setShowModal(false)
  }

  const handleDelete = (id) => {
    showLists((prevLists) => {
      return prevLists.filter(list => {
        return id !== list.id;
      })
    })
    console.log(id);
  }

  return (
    <div className="App container">
      <Title title="Shopping Lists"/>
      <EventLists lists={lists} handleDelete={handleDelete}/>

      {showModal && <Modal><AddItemsForm addItems={addItem}/></Modal>}

      <button className='btn border-0 text-success float-end modal-btn' onClick={() => setShowModal(true)}>
        <i className="fa-solid fa-circle-plus fs-1"></i>
      </button>
    </div>
  );
}

export default App;
