import React from 'react';

function Card(props) {

    return (
        <div key={props.index} className="slide">
            <img src={props.image} alt='{props.name} + "thumbnail"'/>
            <div className="numbertext">{props.number} / {props.totalGames}</div>
            {props.expansion ? <div className="title">{props.title} (Expansion)</div> : <div className="title">{props.title}</div>}
            {props.owned ? <div className="plays-wishlist">Plays: {props.plays}</div> : <div>On Wishlist</div>}
        </div>
    )
}

export default Card;