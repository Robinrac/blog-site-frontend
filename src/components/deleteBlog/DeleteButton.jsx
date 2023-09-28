import axios from "axios";
import PropTypes from "prop-types";
import "./DeleteButton.css";
const DeleteButton = ({ postId, onDelete }) => {
  const handleDelete = async () => {
    try {
      // Skicka DELETE-förfrågan till din backend för att radera inlägget med postId.
      const response = await axios.delete(`https://din-backend-api.com/blogposts/${postId}`);

      if (response.status === 204) {
        // Radering lyckades. Anropa onDelete-funktionen för att uppdatera gränssnittet.
        onDelete(postId);
      } else {
        console.error("Radering misslyckades");
      }
    } catch (error) {
      console.error("Ett fel inträffade:", error);
    }
  };

  return <button onClick={handleDelete}>Radera</button>;
};

DeleteButton.propTypes = {
  postId: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;

