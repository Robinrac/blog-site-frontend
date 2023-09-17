import axios from "axios";
import { useState, useEffect } from "react"

const API = "https://fwk22-group-2-backend.up.railway.app/blogpost"

async function BlogPosts() {
    const [blog, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await axios.get(API);
            const blogData = response.data;

            setBlogs(blogData)
        }
        fetchBlogs();
    }, []);

    return (
        <div>
          {blog.map((blog) => (
            <div key={blog.id}>
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
            </div>
          ))}
        </div>
      );
}

export default BlogPosts;