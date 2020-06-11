import React, { useState, useEffect } from 'react'
import axios from 'axios'




const CollectionContainer = ({ match }) => {

    const [collection, setCollection] = useState([]);
    const { params: { id } } = match;
    const username = match.params.id
    
    useEffect(() => {
        axios.get("https://bgg-json.azurewebsites.net/collection/" + username)
            .then(res => {
            const data = res.data;
            console.log(data);
      });   
    })
    

    

    return(
        <div className="collection-container">
           <h1>{username}'s collection</h1>
           <button onClick={(e) => window.location="/"}>Home</button>
        </div>
    )
}

export default CollectionContainer;