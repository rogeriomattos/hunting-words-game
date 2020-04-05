import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight + 20,
    },
    selectLevelText: {
        textAlign: 'center',
        fontSize: 30
    },

    levels: {
        marginTop: 50,
        alignItems: 'center'
    },

    levelButton: {
        marginBottom: 24,
        paddingVertical: 10,
        paddingHorizontal: 30,
        width:150,
        backgroundColor: '#fff',
    },
 
    levelText: {
        fontSize: 25,
        textAlign: 'center'
    }
});

export default styles;