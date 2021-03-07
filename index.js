const isMagicSquare = function(square){


  // sum up the rows
  let previousSum = null;

  for (let i =0; i <3; i++) {
    let sum = 0;
      for (let j=0; j<3; j++) {
        sum += square[i][j]
      }
      if (previousSum && previousSum != sum) {
        console.log(previousSum,'vs.', sum);
        return false;
      } else {
        previousSum = sum;
      }
  }

  // check the columns
  for (let i=0; i<3;i++) {
    let sum = 0;
    for (let j=0; j<3; j++) {
      sum += square[j][i];
    }
    if (sum != previousSum) {
      console.log(previousSum,'vs.', sum);
      return false;
    }
  }
  return true;
}


module.exports = isMagicSquare;