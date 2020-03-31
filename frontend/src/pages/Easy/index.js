import React, { Component } from 'react';

import './styles.css';

import getWords from '../../utils/words';

import * as huntWord  from 'hunting-words';

export default class Easy extends Component{
    
    state ={
        column: 30,
        row: 12,
        matrix: [],
        positionSelected: [],
        words: []
    };


    componentDidMount(){
        const { row, column } = this.state;

        this.setState({
            matrix: huntWord.create(getWords().map((el) =>{return el.word}), row, column),
            words: getWords()
        });    
    }

    componentDidUpdate(prevProps, prevState){
        const { row, column } = this.state;

        if(row != prevState.row || column != prevState.column)
            this.setState({
                matrix: huntWord.create(getWords().map((el) =>{return el.word}), row, column),
            }); 

        if(this.state.words.filter((el)=>{return el.isFinded}).length == this.state.words.length)
            alert("Parabéns você encontrou todas as palavras");
    }

    toScrambleTtheLetters = () => {
        const { row, column } = this.state;
        
        this.setState({
            matrix: huntWord.create(getWords().map((el) =>{return el.word}), row, column),
        });
        this.cleanWords();
    }

    cleanWords = () =>{
        const w = this.state.words.map(({word}) => {
            return {
                'word': word, 
                'isFinded': false
            };
        });
        console.log(w);
        this.setState({
            words: w
        });
    }

    getLetterSelectedSameWord = (word) =>{
        let lettersSelected = [];
        this.state.matrix
        .filter((row) =>{
            if(row.filter((el)=> { return el.word == word && el.selected;}).length > 0)
                lettersSelected = lettersSelected.concat( row.filter((el)=> { return el.word == word && el.selected;}));
        }); 
        console.log(lettersSelected);
        return lettersSelected;
    }

    verifyFindWord = (word) =>{
        
        if(word){
            let lettersSelected = this.getLetterSelectedSameWord(word)
            if(lettersSelected.length == word.length){
                let wordsAux = this.state.words.map((el)=>{
                   return {'word':el.word, 'isFinded':(el.word == word)? true : el.isFinded}
                });
                
                //wordsAux[lettersSelected[0].wordIndex].isFinded = true;

                this.setState({
                    words: wordsAux
                });
            }
        }
           
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
        const { words, matrix, column, row, positionSelected } = this.state;
        
        return(
            <div className="easy-container">
                <div className="words">
                    {words.map(({word, isFinded}, index)=> (
                        <span key={word + index} className={(isFinded)?"finded":""}>{word}</span>    
                    ))}
                </div>
            
                <button type="button" onClick={this.toScrambleTtheLetters}>Embaralhar palavras</button>
            
                <div className="word-board">
                    {matrix.map((row, indexRow) => (
                        <ul key={'row' + indexRow}>
                            {row.map((item, indexColumn) => (
                                <li 
                                    className={(item.selected)? "selected" : ""}
                                    key={'column' + indexColumn} 
                                    onClick={()=>{this.selectLetter(indexRow, indexColumn)}} 
                                >
                                    {item.letter}
                                </li>
                            ))}
                        </ul>    
                    ))}
                </div>
               
            </div>
        );
    }
}