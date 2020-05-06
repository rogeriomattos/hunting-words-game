import React, { Component } from 'react';

import './styles.css';

export class Board extends Component {
    render() {
        const { board } = this.props;
        return(
            <div className="word-board">
                {board.map((row, indexRow)=>(
                    <ul key={'row' + indexRow}>
                        {row.map((column, indexColumn)=>(
                            <li
                                className={(column.isSelected)? "selected" : ""}
                                key={'column' + indexColumn}
                                onClick={()=>{ this.props.selectLetter(column) }}
                            >
                                {column.letter}
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        );
    }
}