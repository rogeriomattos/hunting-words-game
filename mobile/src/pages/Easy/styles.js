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
        fontSize:30,
    },

    wordSelected: {
        fontSize:30,
        textDecorationLine:'line-through'
    },

    wordBoard: {
        paddingVertical:10,
        paddingHorizontal: 5,
        backgroundColor:"#ccc",
        width:"100%"
    },
    row:{
        flexDirection:'row',
        
    },
    
    letter:{
        
    },

    letterText: {  
        paddingHorizontal:5,
        fontSize:30,
        lineHeight:38,
        width:35,
        height:35,
        textAlignVertical:'center',
        textAlign:'center'
    },

    letterTextSelected:{
        backgroundColor:"#000",
        color: "#fff",
        paddingHorizontal:5,
        fontSize:30,
        lineHeight:35,
        width:35,
        height:35,
        textAlignVertical:'center',
        textAlign:'center'
    },

});

export default styles;