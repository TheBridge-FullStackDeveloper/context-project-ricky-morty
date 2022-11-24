import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Character from "../Character/Character";

const Home = () => {
  //me traigo la función de mi context
  const { getCharacters } = useContext(GlobalContext);
  
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
    <h1>Home</h1>
    <p>El home nose que...</p>
      <Character />
    </div>
  );
};

export default Home;
