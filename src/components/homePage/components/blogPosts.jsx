import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/BlogPosts.css";

const API = "https://fwk22-group-2-backend.up.railway.app/blogpost";

function BlogPosts() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(API);
                const blogData = response.data;
                console.log(blogData);
                setBlogs(blogData.data);
            } catch (error) {
                console.error("Error fetching blog posts:", error);
            }
        };
        fetchBlogs();
    }, []);

    const handleNavigateButton = (blogId) => {
        const newPageUrl = `/blog/${blogId}`;
        
        console.log(newPageUrl)
        window.location.href = newPageUrl; //comment this row out to see output of ID
      };

    return (  
        <div className="blog-area">
            <div className="blog-container">
            {blogs.map((blog) => (
                <div key={blog.id} className="blog-item">
                    <h2>{blog.title}</h2>
                    {/* <p>{blog.date}</p> */}
                    <p id="title-date">2023/8/31</p> {/* placeholder until i can get blog.date from api*/} 
                    <p>{blog.description}</p>
                    <div className="read-more-container">
                        <button className="read-more-button" onClick={() => handleNavigateButton(blog.id)}>Read More</button>
                    </div>
                </div>
            ))}
            </div>
        </div>
            
    );
}

export default BlogPosts;