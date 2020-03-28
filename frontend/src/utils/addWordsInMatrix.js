import randomInt from './randomInt';

/**
 * 
 */
let positionsUsedBefore = [];

export default function addWordsInMatrix(matrix, words){
    
    positionsUsedBefore = [];

    for(let index in words){
        matrix = addWordHorizontalInMatrix(matrix, words[index]);
    }    

    return matrix;
}


function addWordHorizontalInMatrix(matrix, word){

    const {column, row} = getPositionInMatrix(matrix[0].length, matrix.length, word.length, 'addWordHorizontalInMatrix');

    let index = 0;
    for(let j = column; j < column + word.length; j++){
            
        matrix[row][j] = word[index];
        
        index++;

        positionsUsedBefore.push({row,column:j});
    }

    return matrix;
}

function getPositionInMatrix(columnLength, rowLength, wordLength, orientation){

    let row = randomInt(0, rowLength);

    let column = getColumn(columnLength, wordLength);

    if(orientation == 'addWordHorizontalInMatrix'){
        for(let j = column; j < column + wordLength; j++){
            if(isPositionRepeated(row,j)){
                let position = getPositionInMatrix(columnLength, rowLength, wordLength, orientation);
                row = position.row;
                column = position.column;
                break;
            }
        }
    }

    return{
        row: row,
        column: column
    };
}

function isPositionRepeated(row, column){
    for(let index in positionsUsedBefore){
        if(positionsUsedBefore[index].row == row && positionsUsedBefore[index].column == column)
            return true
    }
    return false;
}

function getColumn(columnLength, wordLength){
    let column = randomInt(0, columnLength);
    
    if(column + wordLength >= columnLength)
        column = getColumn(columnLength, wordLength);
    
    return column;

}