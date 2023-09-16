
import { useState } from 'react'
import React from 'react'

const create = () => {
const[title, setTitle] = useState("");
const[description, setDescription] = useState("");

const handleTitleChange = (e) => {
    setTitle(e.target.value)
}
const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
} 
const handleSubmit = (e) => {
    e.preventDefault()

    const blogDataObject = {
        title,
        description
    }
    console.log(blogDataObject)
    console.log(JSON.stringify(blogDataObject))
}

return (
    <div>
        <h1>Create a post</h1>
        <form id='create-post-form' onSubmit={handleSubmit}>
         <label htmlFor='title'>TITLE:</label>
         <textarea
         name='title'
         id='title'
         value={title}
         onChange={handleTitleChange}
         cols={50}
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
         <input type='submit' value="Create"></input>
        </form>
    </div>
)
}

export default create;