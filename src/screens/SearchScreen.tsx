import React, { useState } from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles } from '../theme/appTheme';
import { SearchInput } from './SearchInput';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { useEffect } from 'react';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();
    const [term, setTerm] = useState('')
    const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

    useEffect(() => {

        if (term.length === 0) {
            return setPokemonFiltered([]);
        }

        if (isNaN(Number(term))) {
            setPokemonFiltered(
                simplePokemonList.filter(
                    (poke) => poke.name.toLowerCase()
                        .includes(term.toLowerCase())
                        ||
                        poke.id == term
                )
            );
        } else {
            const pokemonById = simplePokemonList.find((poke) => poke.id == term);
            setPokemonFiltered(
                (pokemonById) ? [pokemonById] : []
            );
        }

    }, [term])

    if (isFetching) {
        return <Loading />
    }

    return (
        <View style={{
            flex: 1,
            // marginTop: top + 10,
            marginHorizontal: 20,
        }}>

            <SearchInput
                onDebounce={(value) => setTerm(value)}
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: top + 20,
                }}
            />

            <FlatList
                data={pokemonFiltered}
                renderItem={({ item }) => <PokemonCard pokemon={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                numColumns={2}

                // Header
                ListHeaderComponent={(
                    <Text style={{
                        ...styles.title,
                        ...styles.globalMargin,
                        paddingBottom: 10,
                        marginTop: top + 60,
                    }}>
                        {term}
                    </Text>
                )}
            />
        </View>
    )
}
