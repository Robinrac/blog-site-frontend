import PropTypes from "prop-types";

const DeleteButton = ({ onDelete }) => {
  const handleDelete = () => {
    onDelete ();

  };

  return <button onClick={handleDelete}>Delete</button>;
};

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired, 
};

export default DeleteButton;
