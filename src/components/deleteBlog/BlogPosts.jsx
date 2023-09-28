import  { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPost from './BlogPost'; // Importera din BlogPost-komponent

const API = 'https://fwk22-group-2-backend.up.railway.app/blogpost';

function BlogPosts() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(API);
        const blogData = response.data;
        setBlogs(blogData.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (postId) => {
    try {
      const response = await axios.delete(`${API}/${postId}`);

      if (response.status === 204) {

        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== postId));
      } else {
        console.error('Radering Deletion failed');
      }
    } catch (error) {
      console.error('an error occured:', error);
    }
  };

  return (
    <div>
      {blogs.map((blog) => (
        <BlogPost key={blog.id} blog={blog} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default BlogPosts;
