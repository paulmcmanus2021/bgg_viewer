import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Carousel from '../components/Carousel'

const CollectionContainer = ({ match }) => {

    const [collection, setCollection] = useState([]);

    const { params: { id } } = match;
    const username = match.params.id
    const fetchURL = "https://bgg-json.azurewebsites.net/collection/" + username

    const fetchData = () => {
        axios.get(`${fetchURL}`).then(res => {
            setCollection(res.data)        
        });
    };
    
    useEffect(() => {
        fetchData();
      },[]);

    return (
        <div className="collection-container">
           <h1>{username}'s collection</h1>
           <Carousel userCollection={collection} />

            <div className="button">
                <button onClick={(e) => window.location="/"}>Home</button>
            </div>
        </div>
    );
}

export default CollectionContainer;