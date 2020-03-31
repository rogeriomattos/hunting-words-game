import React from 'react';
import { Text, View, Touchable, FlatList,TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import * as huntWord from 'hunting-words';

export class Easy extends React.Component {
    selectLetter = () => {
        alert("selecionou bem");
    }

    state ={
        words:["Rogerio","Almeida", "Mattos"],
        matrix : []
    };

    componentDidMount(){
        this.setState({
            matrix: huntWord.create(this.state.words,10,10)
        })
    }

    render(){
        let rowIndex = 0;
        let columnIndex = 0;
        return(
            <ScrollView style={styles.container}>

                <View style={styles.wordsGroup}>
                    {this.state.words.map((word)=>(
                        <Text style={styles.word} key={word}>{word}</Text>
                    ))}
                    
                </View>
                <View style={styles.wordBoard}>
                    {this.state.matrix.map((row)=>{
                        rowIndex++;
                        return(
                            <View  key={rowIndex+"row"} style={styles.row}>
                                {row.map((column)=>{
                                    columnIndex++;
                                    return(
                                        <TouchableOpacity key={columnIndex+"column"} style={styles.letter} onPress={()=>{selectLetter}}>
                                            <Text style={styles.letterText}>{column.letter.toUpperCase()}</Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        )
                    })}
                    
                
                </View>
            </ScrollView>
        );
    }
}