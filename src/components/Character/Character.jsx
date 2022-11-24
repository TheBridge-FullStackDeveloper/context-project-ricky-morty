import React from 'react'

const Character = (props) => {
    const character = props.characters.map((character) => {
        return (
          <>
            <p>{character.name}</p>
            <img src={character.image} />
          </>
        );
      });
  return (
    <div>{character}</div>
  )
}

export default Character