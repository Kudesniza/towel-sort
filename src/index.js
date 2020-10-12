
module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0 ) {
    return [];
  }

  let array = [];
  for (let  i=0; i<matrix.length; i++ ) {
    if ( (i+2)%2 ===0) {
      for (j = 0; j < matrix[i].length ; j++ ) {
        array.push(matrix[i][j]);
      }
    } else {
      for (j = matrix[i].length-1;j >= 0 ; j-- ) {
        array.push(matrix[i][j]);
      }
    }
  }
  return array;
}