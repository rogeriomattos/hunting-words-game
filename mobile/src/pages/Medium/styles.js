import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const letterSize = 24;
const letteFontSize = 16;

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
        fontSize:25,
    },

    wordSelected: {
        fontSize:30,
        textDecorationLine:'line-through'
    },

    wordBoard: {
        paddingVertical:10,
        paddingHorizontal: 0,
        backgroundColor:"#ccc",
        width:"100%"
    },
    row:{
        flexDirection:'row',
        
    },
    
    letter:{
        
    },

    letterText: {  
        paddingHorizontal:3,
        fontSize:letteFontSize,
        lineHeight:letterSize,
        width:letterSize,
        height:letterSize,
        textAlignVertical:'center',
        textAlign:'center'
    },

    letterTextSelected:{
        backgroundColor:"#000",
        color: "#fff",
        paddingHorizontal:3,
        fontSize:letteFontSize,
        lineHeight:letterSize,
        width:letterSize,
        height:letterSize,
        textAlignVertical:'center',
        textAlign:'center'
    },

});

export default styles;