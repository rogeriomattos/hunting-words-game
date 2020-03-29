import alphabet from './alphabet';
import getRandomInt from './randomInt';
import addWordsInMatrix from './addWordsInMatrix';

/**
 * 
 * @param {number} column 
 * @param {number} row 
 * @param {Array<string>} words
 * @returns a string matrix[i][j] 
 */

export default function generateLetterMatrix(column, row, words){
    let matrix = [];
    
    for(let i = 0; i < row; i++){
        let row = [];

        for(let j = 0; j < column; j++)
            row.push({'row':i, 'column': j, 'selected': false, 'letter': alphabet[getRandomInt(0, 25)]});

        matrix.push(row);
    }
    console.log("generateLetterMatrix:");
    console.log(matrix);

    matrix = addWordsInMatrix(matrix, words);

    return matrix;
}