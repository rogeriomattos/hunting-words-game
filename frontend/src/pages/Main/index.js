import React, { Component } from 'react';

import './styles.css';

import words from '../../utils/words';

import generateLetterMatrix from '../../utils/generateLetterMatrix'

export default class Main extends Component{
    
    state ={
        column: 30,
        row: 10,
        matrix: [],
        positionSelected: [],
        words: []
    };


    componentDidMount(){
        const { row, column } = this.state;

        this.setState({
            matrix: generateLetterMatrix(column, row, words),
            words: words
        });    
    }

    componentDidUpdate(prevProps, prevState){
        const { row, column } = this.state;

        if(row != prevState.row || column != prevState.column)
            this.setState({
                matrix: generateLetterMatrix(column, row, words),
            }); 
    }

    toScrambleTtheLetters = () => {
        const { row, column, words } = this.state;

        this.setState({
            matrix: generateLetterMatrix(column, row, words)
        });
    }

    selectLetter = (indexRow, indexColumn) =>{
        const { matrix } = this.state;

        var joined = matrix;
        joined[indexRow][indexColumn].selected = !matrix[indexRow][indexColumn].selected;
        
        this.setState({
            matrix: joined
        });
    } 

    verifyFindWord = () =>{

    }

    render(){
        const { words, matrix, column, row, positionSelected } = this.state;
        
        return(
            <div className="main-container">
                {/* <header>
                    <h1>Main</h1>
                </header> */}
                
                <div className="words">
                    {words.map((word, index)=> (
                        <span key={word + index}>{word}</span>    
                    ))}
                </div>
            
                <div className="configuration-group">
                    <label>Column</label>
                    <input type="number" placeholder="Column" value={column} onChange={(e) => this.setState({column: e.target.value})} />
                    <label>Row</label>
                    <input type="number" placeholder="Row" value={row} onChange={(e) => this.setState({row: e.target.value})} />
                </div>
                
                <button type="button" onClick={this.toScrambleTtheLetters}>Scramble to the letters</button>
                
                
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