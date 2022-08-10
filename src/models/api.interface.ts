export interface IPokemonDetailsResponse {
  id: number;
  name: string;
  types: IPokemonTypes[];
  sprites: IPokemonImg;
}

interface IPokemonTypes {
  type: {
    name: string;
  };
}

interface IPokemonImg {
  versions: {
    "generation-v": {
      "black-white":{
        animated:{
          front_default: string;
        }
      }
    }
  }
}
