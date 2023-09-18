import { useState, useEffect } from "react";
import axios from "axios";

const API = "https://fwk22-group-2-backend.up.railway.app/blogpost";

function BlogPosts() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await axios.get(API);
            const blogData = response.data;
            setBlogs(blogData);
        };
        fetchBlogs();
    }, []);

    return (
      //needs proper fix
        <div>
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.description}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogPosts;
