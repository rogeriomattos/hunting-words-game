import React, { useState, useEffect } from 'react';

import './styles.css';

import alphabet from '../../utils/alphabet';
import words from '../../utils/words';

import generateLetterMatrix from '../../utils/generateLetterMatrix'

export default function Main(){
    const [ column, setColumn ] = useState(30);
    const [ row, setRow ] = useState(10);
    const [matrix, setMatrix] = useState([]);

    useEffect(()=>{
        setMatrix(generateLetterMatrix(column, row, words));
    },[row, column]);

    function toScrambleTtheLetters(){
        setMatrix(generateLetterMatrix(column, row, words));
    }

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
                <input type="number" placeholder="Column" value={column} onChange={(e) => setColumn(e.target.value)} />
                <label>Row</label>
                <input type="number" placeholder="Row" value={row} onChange={(e) => setRow(e.target.value)} />
            </div>
            
            <button type="button" onClick={toScrambleTtheLetters}>Scramble to the letters</button>
            
            <div className="word-board">
                {matrix.map((row, index) => (
                    <ul key={'row' + index}>
                        {row.map((column, index) => (
                            <li key={'column' + index}>{column}</li>
                        ))}
                    </ul>    
                ))}
            </div>
        </div>
    );
}