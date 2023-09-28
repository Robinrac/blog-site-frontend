import PropTypes from "prop-types";

const DeleteButton = ({ onDelete }) => {
  const handleDelete = () => {

  };

  return <button onClick={handleDelete}>Radera</button>;
};

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired, 
};

export default DeleteButton;
