import React from 'react';

function Collection(props) {


const gamesList = props.userCollection.map((game, index) => {
    return (
        <p>test</p>
    )
  })




return (
    <div className="slideshow-container">
        {gamesList}
    </div>
    );
}

export default Collection;