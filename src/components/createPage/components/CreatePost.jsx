import React, { useState } from 'react';
//import { collection, addDoc } from 'firebase/firestore';
//import db from './firebase'; // Importera  Firebase-instans




// let date = new Date()
// let day = date.getDay()
// let month = date.getMonth() + 1
// let year = date.getFullYear()
// let hour = date.getHours()
// let minute = date.getMinutes()
// let fullDate = `${hour}:${minute} ${day}/${month}-${year}`

//let id = uuid()
//console.log(uuid())
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


const handleSubmit = (e) => {
    e.preventDefault()
    setIsPending(true)
    const blogData = new FormData(e.target);
    const inputValues = [...blogData.values()];
    console.log(inputValues)

    const blogDataObject = Object.fromEntries(blogData);
    console.log(blogDataObject)
  
    
    // console.log(blogDataObject)
    // console.log(JSON.stringify(blogDataObject))
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