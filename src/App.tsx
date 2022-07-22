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
      <div className="appTitle">
        <span style={{ color: "rgb(104, 104, 228)" }}>Pok</span>
        <span>ory</span>
      </div>
      <input
        type="text"
        onChange={handleChange}
        value={pokemon}
        placeholder="Digite o nome"
      />
      {error && (
        <span className="pokeError">Digite um nome de pokémon válido</span>
      )}
      <button onClick={getPokeData}>Buscar</button>
      {pokeData.id && (
        <div className="pokeWrapper">
          <img
            src={pokeData.sprites.other.dream_world.front_default}
            alt="Pokemon"
          />
          <ul>
            <li>Nº: {pokeData.id}</li>
            <li>Nome: {capitalizeFirstLetter(pokeData.name)}</li>
            <li>Tipo:</li>
            {pokeData.types.map((pokeType) => (
              <li style={{ marginLeft: "2rem" }}>
                {capitalizeFirstLetter(pokeType.type.name)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
