import '../App.css'
import { useState } from 'react'
import React from 'react'

const create = () => {
const[title, setTitle] = useState("");
const[description, setDescription] = useState("");



return (
    <div>
        <h1>Create a post</h1>
        <form id='create-post-form'>
         <label htmlFor='title'>TITLE:</label>
         <textarea
         name='title'
         id='title'
         cols={50}
         rows={10}
         required
         ></textarea>
         <label htmlFor='description'>DESCRIPTION:</label>
         <textarea
         name='description'
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