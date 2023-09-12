import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from './firebase'; // Importera din Firebase-instans

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Lägg till inlägg i Firestore-databasen
    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        title,
        content,
        timestamp: new Date(),
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
        <button type="submit">Skapa inlägg</button>
      </form>
    </div>
  );
};

export default CreatePost;
