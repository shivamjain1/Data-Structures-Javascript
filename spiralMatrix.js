/* 
    Print a given matrix in spiral form
*/

const inputMatrix = [
    [1, 2, 3, 4,  5],
    [6, 7, 8, 9, 10],
    [11,12,13,14,15],
    [16,17,18,19,20],
  ]
  
  const exprectOutput = [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]

  const walkMatrix = function(matrix){
      let rows = matrix.length, cols = matrix[0].length;
      let startRow = 0, startColumn = 0, endRow = rows - 1, endColumn = cols - 1;
      let result = [];

    while(endRow >= startRow && endColumn >= startColumn){
        // top row (left --> right)
        for(let i=startColumn; i<= endColumn; i++){
            result.push(matrix[startRow][i]);
        }
        startRow++;

        // right column (top --> bottom)
        for(let i= startRow; i<= endRow; i++){
            result.push(matrix[i][endColumn]);
        }
        endColumn--;
        
        // bottom column (right --> left)
        if(endColumn >= startColumn){
            for(let i= endColumn; i>= startColumn; i--){
                result.push(matrix[endRow][i]);
            }
        }
        endRow--;

        // left column (bottom --> top)
        if(endRow >= startRow){
            for(let i=endRow; i>=startRow; i--){
                result.push(matrix[i][startColumn]);
            }
        }
        startColumn++
    }
    return result;

  }

  console.log(walkMatrix(inputMatrix));