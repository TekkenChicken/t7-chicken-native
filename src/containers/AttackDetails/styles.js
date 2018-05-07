import { StyleSheet} from 'react-native';
import * as Colors from '../../style/vars/colors';

export default Styles = StyleSheet.create({
    mainContainer: {
      flex: 1
    },
    notation: {
      backgroundColor: 'transparent',
      color: 'white'
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      backgroundColor: Colors.redSecondary
    },
    moveButton: {
      fontSize: 16,
      fontWeight: '600',
      color: Colors.yellow,
      paddingRight: 20,
      paddingLeft:20,
      paddingTop: 10,
      paddingBottom: 10
    },
    previousButton: {
      textAlign: 'left'
    },
    nextButton: {
      alignSelf: 'flex-end'
    },
    inputs: {
      justifyContent: 'center',
      paddingTop: 15,
      paddingBottom: 20
    },
    tempGifAlert: {
      backgroundColor: '#111',
      textAlign: 'center',
      color: '#f0aa23',
      paddingTop: 20,
      paddingBottom: 20
    }
});
