/**
 * This is a magic square is a 3x3 grid where all rows, all columns, and
 * each diagonal add up to the same number.
 */

/**
 * Helper function to generate random numbers
 */
function generateMagicSquare() {
    const magicSquare = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]

    let n = magicSquare.length
    let numList = Array.from({ length: n * n }, (_, i) => i + 1)
    
    numList.sort(() => Math.random() - 0.5)
  
    let num = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            magicSquare[i][j] = numList[num]
            num++
        }
    }

    return magicSquare
}

/**
 * Helper function to print the grid in human-readable form.
 * @param {Array} some2dGrid A 2D array which represents the magic square
 */

function printTheGrid(square) {
    console.log("-------------")
    for (let i = 0; i < square.length; i++) {
        let row = square[i]
        let rowString = ""
        for (let j = 0; j < row.length; j++) {
            rowString += ("| " + row[j] + " ")
        }
        console.log(rowString + "|")
        if (i === square.length - 1) {
            console.log("-------------")
        } else {
            console.log("----+---+---")
        }
    }
}
/** This is a helper function to check if a 3x3 grid is a magic square.
 * @param {Array} square a 2-d array which represents the magic square
 * @returns {boolean} true if it's a magic square, false otherwise
 */

function isMagicBox(square) {
	// Calculate the expected sum of rows, columns, and diagonals
	let total = 15 // The sum of rows, columns, and diagonals in a 3x3 magic square.
  
	// Checking rows and columns
	for (let i = 0; i < 3; i++) {
	  let rowSum = 0
	  let colSum = 0
	  for (let j = 0; j < 3; j++) {
		rowSum += square[i][j]
		colSum += square[j][i]
	  }
	  if (rowSum !== total || colSum !== total) {
		return false
	  }
	}
  
	// Checking diagonals
	let diagonal1Sum = square[0][0] + square[1][1] + square[2][2]
	let diagonal2Sum = square[0][2] + square[1][1] + square[2][0]
  
	return diagonal1Sum === total && diagonal2Sum === total;
  }
/** This is a helper function which will call the generateMagicSquare function
 *  and isMagicBox function and print the result.
*/
function generateAndPrintMagicSquare() {
    while (true) {
        let magicSquare = generateMagicSquare()
         
        if (isMagicBox(magicSquare)) {
            printTheGrid(magicSquare)
            break;
        }
    }
}

generateAndPrintMagicSquare()
