import React from "react";

export default function CharacterCard(props) {
    const { name, status, species, location, image } = props.character
    return (
        <div>
            <h2>{name}</h2>
            <div>
                <img src={image} alt={name} />
            </div>
            <p>Location: {location.name} </p>
            <p>Species: {species} </p>
            <p>Status: {status} </p>
        </div>
    )
}