import React, { useEffect, useState } from "react";
import axios from "axios";
import Character from "../Character/Character";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  
  const getCharacters = async () => {
    try {
      const res = await axios.get("https://rickandmortyapi.com/api/character");
      setCharacters(res.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);


  return (
    <div>
    <h1>Home</h1>
    <p>El home nose que...</p>
      <Character characters={characters}/>
    </div>
  );
};

export default Home;
