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
  other: {
    dream_world: {
      front_default: string;
    };
  };
}
