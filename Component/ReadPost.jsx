import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from './firebase'; // Importera  Firebase-instans

const ReadPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'posts'));
        const postsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postsData);
      } catch (error) {
        console.error('Fel vid hämtning av inlägg:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Blogginlägg</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadPosts;
