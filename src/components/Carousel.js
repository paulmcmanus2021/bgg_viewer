import React from 'react';

function Carousel(props) {

const gamesArray = props.userCollection
console.log(gamesArray);




return (
    <div className="carousel">
        {gamesArray.map((game, index) => {
            
                return (
                <div key={index} className="slide">
                    <div className="numbertext">{index + 1} / {gamesArray.length}</div>
                    <img src={game.thumbnail} />
                    <div className="title">{game.name}</div>
                    <div className="play-count">Plays: {game.numPlays}</div>
                </div>
            );
            
            
        })}
    </div>  
    );
}

export default Carousel;