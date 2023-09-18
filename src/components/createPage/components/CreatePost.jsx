import React, { useState } from 'react';
import axios from 'axios';
import '../components/index.css'

const API = "https://fwk22-group-2-backend.up.railway.app/blogpost";


const CreatePost = () => {
const[title, setTitle] = useState("");
const[description, setDescription] = useState("");
const [isPending, setIsPending] = useState(false);

const handleTitleChange = (e) => {
    setTitle(e.target.value)
}
const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
} 


const handleSubmit = async (e) => {
    e.preventDefault()
    setIsPending(true)
    const blogData = new FormData(e.target);
    const blogDataArray = [...blogData.values()];
    console.log(blogDataArray)

    const blogDataObject = Object.fromEntries(blogData);
    console.log(blogDataObject)

    const response = await axios.post(API, blogDataObject)
    .then(response => console.log(response))
    .catch(err => console.log(err))
  
}

return (
    <div>
        <h1>Create a post</h1>
  <div className="container">
        <form id='create-post-form' onSubmit={handleSubmit}>
         <label htmlFor='title'>TITLE:</label>
         <textarea
         name='title'
         id='title'
         value={title}
         onChange={handleTitleChange}
         cols={30}
         rows={10}
         required
         ></textarea>
         <label htmlFor='description'>DESCRIPTION:</label>
         <textarea
         name='description'
         value={description}
         onChange={handleDescriptionChange}
         id='description'
         cols={50}
         rows={10}
         ></textarea>   
           {!isPending && <input  type="submit" value="Create"></input>}
      {isPending && <input  type="submit" value="Adding blog..." disabled></input>}
           </form>
        </div>
    </div>
)
}

export default CreatePost
