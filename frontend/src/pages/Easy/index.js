import React, { Component } from 'react';

import { Board } from '../../components/Board';

import './styles.css';

import getWords from '../../utils/words';

import { createGame } from 'hunting-words';

const options = {
    wordsCross:false, 
    inverseWord:false, 
    wordInVertical:true,
    wordInHorizontal:true, 
    wordDiagonalLeft: false, 
    wordDiagonalRight: false
};

export default class Easy extends Component {
    

    state ={
        columns: 10,
        rows: 10,
        game: new createGame(0, 0, []),
        words: ["word1","word2","word3"]
    };

    constructor(props){
        super(props);
    }

    componentDidMount(){
        const {rows, columns, words} = this.state;
        this.setState({
            game: new createGame(rows, columns, words, options)
        });
    }

    getLetterSelectedSameWord = (word) =>{
        let lettersSelected = 0;
        this.state.game.board
        .filter((row) =>{
            lettersSelected = lettersSelected + row.filter((el)=> { return el.word == word && el.isSelected;}).length;
        });

        return lettersSelected;
    }

    verifyFindWord = (words) =>{

        for(let word of words){

            let lettersSelected = this.getLetterSelectedSameWord(word)

            if(lettersSelected == word.length){
                alert("Você achou a palavra: " + word);
            }
        }
    }

    selectLetter = (item) =>{

        let game = this.state.game;

        game.board[item.row][item.column].setIsSelected(!item.isSelected);

        this.setState({
           game: game
        });

        this.verifyFindWord(item.word);
    }

    render(){
        const { rows, columns, board, words } = this.state.game;
        console.log(words);
        return(
            <div>
                <div className="easy-container">
                    <div className="words">    
                        {words.map(( word , index)=> (
                            <span key={word + index} className={""}>{word}</span>
                        ))}
                    </div>
                    <Board board={board} selectLetter={this.selectLetter.bind(this)}/>
                </div>
            </div>
        );
    }

    
}