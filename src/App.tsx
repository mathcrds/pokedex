import { api } from "./services/api";
import { IPokemonDetailsResponse } from "./models/api.interface";
import { useState } from "react";

export const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");

  

  async function getPokeData() {
    const response = await api.get(`/pokemon/${pokemon}`);
    const pokemonData: IPokemonDetailsResponse = response.data;
    console.log(pokemonData.types);
  }

  return (
    <>
      <input type="text" />
      <button onClick={getPokeData}>Buscar</button>
      <img src="" alt="Pokemon" />
      <ul>
        <li>Nº</li>
        <li>Nome</li>
        <li>Tipo</li>
      </ul>
    </>
  );
};
