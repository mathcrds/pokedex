export interface IPokemonDetailsResponse {
  id: number;
  name: string;
  types: IPokemonTypes[];
}

interface IPokemonTypes {
  type: {
    name: string;
  };
}
