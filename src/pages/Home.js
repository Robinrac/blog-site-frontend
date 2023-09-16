import React, { useEffect, useState } from 'react';
import { fetchBlogPosts } from '../api/api';

function BlogPosts() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchBlogPosts();
        if (data.error) {
          setError(data.error);
        } else {
          setBlogPosts(data.blogPosts);
        }
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {blogPosts.map((post, index) => (
          <li key={index}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogPosts;
