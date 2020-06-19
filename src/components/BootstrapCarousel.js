import React from 'react'  
import Carousel from 'react-bootstrap/Carousel'  


function BootstrapCarousel(props) { 

    console.log(props.userCollection);

    const gamesList = props.userCollection.map((game,index) => {
    return (
        <Carousel.Item key={index}>
    <img
      className="d-block w-100"
      src={game.image}
      alt='{game.name} + "thumbnail"'
    />
      <h3>{index + 1} / {props.userCollection.length}</h3>
      {game.isExpansion ? <h2>{game.name} (Expansion)</h2> : <h2 className="title">{game.name}</h2>}
      {game.owned ? <h3>Plays: {game.numPlays}</h3> : <h3>On Wishlist</h3>}
    
  </Carousel.Item>
        
    )
  })
    

    return (
        <Carousel className="carousel">
            {gamesList}  
        </Carousel>
    ) 

}

export default BootstrapCarousel 