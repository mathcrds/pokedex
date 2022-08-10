import { api } from "./services/api";
import { IPokemonDetailsResponse } from "./models/api.interface";
import { useState } from "react";
import "./styles/App.scss";
import capitalizeFirstLetter from "./utils";

export const App = () => {
  const [pokemon, setPokemon] = useState("");
  const [pokeData, setPokeData] = useState<IPokemonDetailsResponse>(
    {} as IPokemonDetailsResponse
  );
  const [error, setError] = useState("");

  const handleChange = (event: any) => {
    setPokemon(event.target.value);
  };

  async function getPokeData() {
    try {
      const response = await api.get(`/pokemon/${pokemon.toLowerCase()}`);
      const pokemonData: IPokemonDetailsResponse = response.data;
      setError("");
      setPokeData(pokemonData);
    } catch (error: any) {
      setError(error.response.data);
      setPokeData({} as IPokemonDetailsResponse);
    }
  }

  return (
    <div className="container">
      <img src="src\assets\pokedex.png" alt="" className="pokedex" />
      <form className="form">
        <input
        type="search"
        onChange={handleChange}
        value={pokemon}
        placeholder="Insert Pokemon Name"
        required
      />
      </form>
      {error && (
        <span className="pokeError">Error: invalid pokemon name</span>
      )}
      <button onClick={getPokeData}>Buscar</button>
      {pokeData.id && (
        <div className="pokeWrapper">
          <img
            src={pokeData.sprites.versions["generation-v"]["black-white"].animated.front_default}
            alt="Pokemon"
          />
            <h1 className="pokeTitleInfo">
              <p>Number: {pokeData.id}</p>
              <p>Name: {capitalizeFirstLetter(pokeData.name)} </p>
              </h1> 
            {/* <li>Tipo:</li>
            {pokeData.types.map((pokeType) => (
              <li style={{ marginLeft: "2rem" }}>
                {capitalizeFirstLetter(pokeType.type.name)}
              </li>
            ))} */}
        </div>
      )}
    </div>
  );
};
