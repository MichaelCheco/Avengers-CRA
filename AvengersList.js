import React from "react";
import Avengers from "./Avengers";

const AvengersList = (props, index) => {
    return (
        <div>
            {props.AvengersData.map(x => {
                return (
                    <Avengers Avenger={x} key={index}/>
                )
            })}
        </div>
    )
}

export default AvengersList;