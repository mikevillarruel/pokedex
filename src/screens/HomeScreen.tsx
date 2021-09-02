import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { FadeInImage } from '../components/FadeInImage';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { simplePokemonList, loadPokemons } = usePokemonPaginated();

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />

            {/* <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20,
            }}>
                Pokedex
            </Text> */}

            <FlatList
                data={simplePokemonList}
                renderItem={({ item }) => (
                    <FadeInImage
                        uri={item.picture}
                        style={{
                            width: 100,
                            height: 100,
                        }}
                    />
                )}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                // Infinite Scroll
                onEndReached={loadPokemons}
                onEndReachedThreshold={0.4}

                ListFooterComponent={(
                    <ActivityIndicator
                        style={{ height: 100 }}
                        size={20}
                        color='green'
                    />
                )}
            />


        </>
    )
}
