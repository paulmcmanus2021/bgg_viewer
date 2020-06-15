import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CollectionContainer = ({ match }) => {

    const [collection, setCollection] = useState([]);

    const { params: { id } } = match;
    const username = match.params.id
    const fetchURL = "https://bgg-json.azurewebsites.net/collection/" + username

    const fetchData = () => {
        axios.get(`${fetchURL}`).then(res => {
            console.log(res.data); 
            setCollection(res.data)        
        });
    };
    
    useEffect(() => {
        fetchData();
      },[]);

    return (
        <div className="collection-container">
           <h1>{username}'s collection</h1>
           <button onClick={(e) => window.location="/"}>Home</button>
        </div>
    );
}

export default CollectionContainer;