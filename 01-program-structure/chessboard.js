/**
 * Draw a chessboard based on the input given in terms of 
 * rows by columns e.g  8 * 8
 */
for(let row = 0; row < 8; row++) {
    let line = '';
    for(let column = 0; column < 8; column++) {
        if(row%2 == 0) {
            if(column%2 == 0) line += '-';
            else line += '#';
        } else {
            if(column%2 == 1) line += '-';
            else line += '#';
        }
    }
    console.log(line);
}

// Alternative.
// Short and concise
let board = ''
for(let x = 0; x < 8; x++) {
    for(let y=0; y < 8; y++) {
        if((x + y) % 2 == 0) board += ' ';
        else board += '#';
    }
    board += '\n'
}

console.log(board)