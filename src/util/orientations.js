import { Dimensions } from 'react-native';

//returns true if portrait
export const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
}

//returns true if landscape
export const isLandScape = () => {
    const dim = Dimensions.get('screen');
    return dim.width >= dim.height;
}

