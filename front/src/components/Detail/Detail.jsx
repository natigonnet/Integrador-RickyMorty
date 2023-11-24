import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const APIKEY = "pi-natigonnet";
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    // axios(`https://rickandmortyapi.com/api/character/${id}?key=${APIKEY}`)
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div>
      {character.name && (
        <>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <h2>{character.status}</h2>
          <h2>{character.species}</h2>
          <h2>{character.gender}</h2>
          <h2>{character.origin?.name}</h2>
        </>
      )}
    </div>
  );
}

export default Detail;
