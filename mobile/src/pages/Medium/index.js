import React from 'react';
import { Text, View, Touchable, FlatList,TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import * as huntWord from 'hunting-words';
import words from '../../data/words';

export class Medium extends React.Component {

    state ={
        words: words.medium,
        matrix : []
    };

    componentDidUpdate(prevProps, prevState){
        const { words } = this.state;


        if(words.length &&  words.filter((el)=>{return el.isFinded}).length == words.length)
            alert("Parabéns você encontrou todas as palavras");
    }

    componentDidMount(){
        this.load();
    }

    getLetterSelectedSameWord = (word) =>{
        let lettersSelected = [];
        
        this.state.matrix
        .filter((row) =>{
            if(row.filter((el)=> { return el.word == word && el.selected;}).length > 0)
                lettersSelected = lettersSelected.concat( row.filter((el)=> { return el.word == word && el.selected;}));
        }); 
        
        return lettersSelected;
    }

    verifyFindWord = (word) =>{
        
        if(word){
            let lettersSelected = this.getLetterSelectedSameWord(word)
            
            if(lettersSelected.length == word.length){
                let wordsAux = this.state.words.map((el)=>{
                   return {'word':el.word, 'isFinded':(el.word == word)? true : el.isFinded}
                });

                this.setState({
                    words: wordsAux
                });
            }
        }
           
    }

    load = () =>{
        this.setState({
            matrix: huntWord.create(this.state.words.map((el) =>( el.word)) ,15,15),
            word: words.medium
        }); 
    }
    
    selectLetter = (indexRow, indexColumn) =>{
        const { matrix } = this.state;

        var joined = matrix;
        
        joined[indexRow][indexColumn].selected = !matrix[indexRow][indexColumn].selected;

        this.setState({
            matrix: joined
        });

        this.verifyFindWord(joined[indexRow][indexColumn].word);
    } 


    render(){
        let rowIndex = 0;
        let columnIndex = 0;
        return(
            <ScrollView style={styles.container}>
                <View style={styles.wordBoard}>
                    {this.state.matrix.map((row)=>{
                        rowIndex++;
                        return(
                            <View  key={rowIndex+"row"} style={styles.row}>
                                {row.map((column)=>{
                                    columnIndex++;
                                    return(
                                        <TouchableOpacity key={columnIndex+"column"} style={styles.letter} onPress={()=>{this.selectLetter(column.row, column.column)}}>
                                            <Text style={(column.selected)? styles.letterTextSelected : styles.letterText}>{column.letter.toUpperCase()}</Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        )
                    })}
                </View>

                <View style={styles.wordsGroup}>
                    {this.state.words.map(({word, isFinded})=>(
                        <Text style={(isFinded)? styles.wordSelected : styles.word} key={word}>{word}</Text>
                    ))}
                </View>
                <View>
                    <TouchableOpacity onPress={this.load}><Text> Reload </Text></TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}