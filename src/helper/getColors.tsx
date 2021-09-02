import ImageColors from "react-native-image-colors";

export const getImageColors = async (uri: string) => {

    const result = await ImageColors.getColors(uri, {
        fallback: 'grey'
    })

    let primary;

    switch (result.platform) {
        case 'android':
            primary = result.dominant;
            break;
        case 'ios':
            primary = result.background;
            break;
    }

    return [primary];
}
