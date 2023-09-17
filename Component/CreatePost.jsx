import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from './firebase'; // Importera  Firebase-instans

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPending, setIsPending] = useState(false);

  const date = new Date();
  let day = date.getDate; 
  let year = date.getFullYear;
  let month = date.getMonth() +1;
  let hour = date.getHours()
  let minute = date.getMinutes(); 
let fullDate = `${hour}:${minute} ${day}/${month}-${year}`

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Lägg till inlägg i Firestore-databasen
    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        title,
        content,
        fullDate
      });

      console.log('Inlägg skapat med ID:', docRef.id);
      // Rensa formuläret
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Fel vid skapande av inlägg:', error);
    }
  };

  return (
    <div>
      <h2>Skapa ett nytt inlägg</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Rubrik"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Innehåll"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
       {!isPending && <input  type="submit" value="Create"></input>}
      {isPending && <input  type="submit" value="Adding blog..." disabled></input>}
      </form>
    </div>
  );
};

export default CreatePost;
