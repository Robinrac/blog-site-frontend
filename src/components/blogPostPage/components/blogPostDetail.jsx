import React from "react";
import { useLocation } from "react-router-dom";

function BlogPostDetail() {
  const location = useLocation();
  const { title, description } = location.state || {};
  return (
    <div>
      <h2>{title || "Title Not Found"}</h2>
      <p>{description || "Description Not Found"}</p>
      <p>on blog</p>
      
    </div>
  );
}

export default BlogPostDetail;
