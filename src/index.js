
module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0 ) {
    return [];
  }
  
    let answer = [];
    matrix.map(function (array, index) {
      if (index === 0 || index%2 === 0) {
          answer = answer.concat(array);
      } else if (index % 2 != 0) {
          answer = answer.concat(array.reverse());
      }
    })
    return answer;
}
