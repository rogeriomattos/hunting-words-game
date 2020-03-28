import alphabet from './alphabet';
import  getRandomInt from './randomInt';
/**
 * 
 * @param {number} column 
 * @param {number} row 
 */

export default function generateLetterMatrix(column, row){
    let matrix = [];

    for(let i = 0; i < row; i++){
        let row = [];

        for(let j = 0; j < column; j++)
            row.push(alphabet[getRandomInt(0, 25)]);

        matrix.push(row);
    }

    console.log(matrix);

    return matrix;
}