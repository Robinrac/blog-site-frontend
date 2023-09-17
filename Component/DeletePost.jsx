import React from 'react'
import './App.css'

const Blog = () => {

    const handleDelete = async function(e){
        e.preventDefault();
    
     e.target.parentNode.remove()

    }


    return (
        <div>
            <h1>BLOG</h1>
            <div className='container'>

            <h1>Hello</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum omnis magni illo debitis reiciendis non aperiam nam sit quaerat laboriosam ipsam, dicta rerum sint? Sint expedita ab sunt sed recusandae.
            Quasi non adipisci unde sint totam iure rem accusamus magni obcaecati eveniet, nobis quia dolores iste laboriosam consequatur perspiciatis explicabo nostrum recusandae voluptas? Quasi tempore voluptate voluptatibus recusandae vitae. Adipisci?
            Illum ab atque voluptate? Numquam fugiat facere non nostrum sunt laudantium reiciendis ratione eligendi animi fugit ducimus voluptates necessitatibus molestias nesciunt aspernatur id, consectetur quia incidunt. Facilis quis deleniti tempora?
            Facilis perferendis cum vitae et voluptatum alias obcaecati nulla cumque, praesentium culpa similique sed iusto placeat expedita dolorem. Necessitatibus sed atque exercitationem architecto est vel nobis nesciunt nostrum dolores praesentium?</p>

        <input type="submit" onClick={handleDelete} value="Delete" />
            </div>


        </div>
    )
}

export default Blog