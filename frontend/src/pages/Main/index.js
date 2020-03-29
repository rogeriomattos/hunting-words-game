import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

export default function Main () {
    return(
        <div className="main-container">
            <h1>Hunting Words</h1>
            <p>
                Bem-vindo ao Huntimg Words, selecione o nível de dificuldade para você se divertir.
            </p>
            <ul>
                <li>
                    <Link to={"/easy"}>
                        Easy
                    </Link>
                </li>
            </ul>
        </div>
    );
}