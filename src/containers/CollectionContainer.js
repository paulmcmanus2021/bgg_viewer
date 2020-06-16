import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Carousel from '../components/Carousel'
import Input from '../components/Input'

const CollectionContainer = ({ match }) => {

    const [collection, setCollection] = useState([]);
    

    const { params: { id } } = match;
    const username = match.params.id
    const fetchURL = "https://bgg-json.azurewebsites.net/collection/" + username

    const fetchData = () => {
        axios.get(`${fetchURL}`)
            .then(res => {
                if (res.data.length > 0) {            
                setCollection(res.data)
                } else {
                window.location="/not_found/" + username
                }
            })
            .catch(error => {
                console.log(error);
            })
    };
    
    useEffect(() => {
        fetchData();
      },[]);
    

    return (
        <div className="collection-container">
            {collection.length > 0 ?
            <>
            <h1><u>{username}'s Collection</u></h1>
            <h3> Try another BGG user </h3>
           <Input />
           <br />
           <Carousel userCollection={collection} /> 
            </>
            :
            <p> Searching...</p>}
        </div>
    );
}

export default CollectionContainer;