import { useEffect, useState } from "react";
import { pokemonApi } from '../api/pokemonApi';
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';


export const usePokemonSearch = () => {

    const [isFetching, setIsFetching] = useState(true);
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);

    const loadPokemons = async () => {

        const response = await pokemonApi.get<PokemonPaginatedResponse>('https://pokeapi.co/api/v2/pokemon?limit=898');
        mapPokemonList(response.data.results);

        setIsFetching(false);

    }

    const mapPokemonList = (pokemonList: Result[]) => {

        const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {

            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

            return { id, name, picture }

        });

        setSimplePokemonList(newPokemonList);

    }

    useEffect(() => {
        loadPokemons();
    }, [])

    return {
        isFetching,
        simplePokemonList,
    }
}
