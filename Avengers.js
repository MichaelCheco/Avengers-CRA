import React from "react";

const Avengers = props => {
    return (
        <div>
            <h4>{props.Avenger.title}</h4>
            <h4>{props.Avenger.year}</h4>
            <h4>{props.Avenger.director}</h4>
            <h4>{props.Avenger.genre}</h4>
        
        </div>
    )
}

export default Avengers;