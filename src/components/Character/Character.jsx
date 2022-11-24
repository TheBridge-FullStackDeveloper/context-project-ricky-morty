import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';

const Character = () => {
    const { characters } = useContext(GlobalContext);

    const character = characters.map((character) => {
        return (
          <div key={character.id}>
            <p>{character.name}</p>
            <img src={character.image} />
          </div>
        );
      });
  return (
    <div>{character}</div>
  )
}

export default Character