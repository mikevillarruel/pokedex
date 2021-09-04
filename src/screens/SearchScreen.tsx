import React from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles } from '../theme/appTheme';
import { SearchInput } from './SearchInput';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();

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
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: top + 20,
                }}
            />

            <FlatList
                data={simplePokemonList}
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
                        Pokedex
                    </Text>
                )}
            />
        </View>
    )
}
