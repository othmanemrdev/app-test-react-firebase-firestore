import React, { useState, useEffect } from 'react';
import './App.css';
import { addDoc, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';


function App() {
  const [x, setX] = useState('');
  const [allX, setAllX] = useState([]);
  const refCollec = collection(db, 'test');


  //  console.log(x);


  const addX = async () => {

    const newX = {
      theText: x,
    };

    await addDoc(refCollec, newX);
     window.location.reload();
  };

  const getX = async () => {

      const querySnapshot = await getDocs(refCollec);
        // console.log(" Salut moi c'est le querySnapshot ",querySnapshot);
         console.log(" Salut moi c'est le querySnapshot.docs ",querySnapshot.docs);

      const documents = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
        console.log(" Salut moi c'est le documents ",documents);

      setAllX(documents);
  };

const deleteX = async (id) => {
  const xToDelete = doc(db, "test", id);
  await deleteDoc(xToDelete);
  getX();

};


  useEffect(() => {
    getX();
  }, []); 

  return (
    <div>
      <h1>Add Document</h1>
      <input onChange={(event) => setX(event.target.value)} value={x}  />
      <button onClick={addX}>Add</button>

      <h2>All Documents</h2>
      <ul>
        {allX.map((item) => (
          <li key={item.id}>{item.theText} <button onClick={() => deleteX(item.id)}>X</button></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
