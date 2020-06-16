import React from 'react';
import Card from './Card'

function Carousel(props) {


const gamesList = props.userCollection.map((game, index) => {
    return (
        <Card
            key={index}
            number={index + 1}
            totalGames={props.userCollection.length}
            title={game.name}
            image={game.thumbnail}
            plays={game.numPlays}
            owned={game.owned}
            expansion={game.isExpansion}
        >
        </Card>
    )
  })




return (
    <div className="slideshow-container">
        {gamesList}
    </div>
    );
}

export default Carousel;