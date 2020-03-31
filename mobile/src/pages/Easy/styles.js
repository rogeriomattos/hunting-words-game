import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight + 20,
    },

    wordsGroup: {
        paddingTop: 24,
        paddingBottom: 24,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
        maxWidth: "100%"
    },

    word:{
        fontSize:20,
    },

    wordBoard: {
        backgroundColor:"#ccc",
        width:"100%"
    },
    row:{
        flexDirection:'row',
        
    },
    
    letter:{
        padding:10
    },

    letterText: {
        fontSize:15,
        lineHeight:15,
        width:15,
        height:15,
        textAlign:'center'
    }

});

export default styles;