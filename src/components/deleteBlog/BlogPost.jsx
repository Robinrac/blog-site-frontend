import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";

const BlogPost = ({ blog, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(blog.id);
  };
  
  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
      <DeleteButton onDelete={handleDeleteClick} />
    </div>
  );
};


BlogPost.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};

export default BlogPost;