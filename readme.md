# Magic Square
A magic square is a grid filled with numbers, and every row, columns and diagonals will sum up to the same number. See this article on wikipeida for some examples: https://en.wikipedia.org/wiki/Magic_square

Your task is to finish the `isMagicSquare` function which will take in a 3x3 array. It will return `true` if the given 3x3 square is a magic square, `false` if otherwise.


## Sample runs
```
let square = [
  [2,7,6],
  [9,5,1],
  [4,3,8]
];

console.log(isMagicSquare(square));
--> true
```

```
let square = [
  [2,4,6],
  [2,1,1],
  [4,5,8]
];

console.log(isMagicSquare(square));
--> false
```