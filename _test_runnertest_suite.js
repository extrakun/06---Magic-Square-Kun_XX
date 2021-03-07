const index = require('./index.js');
const isMagicSquare = require('./index.js')

describe("UnitTests", function() {

  test("proper-square", async function() {
    let square = [
      [2,7,6],
      [9,5,1],
      [4,3,8]
    ];
    
    expect(isMagicSquare(square)).toBe(true)
  });

  test("proper-square-2", async function() {
    let square = [
      [8,1,6],
      [3,5,7],
      [4,9,2]
    ];
    
    expect(isMagicSquare(square)).toBe(true)
    
  });

  test("fake-square", async function() {
    let square = [
      [2,1,6],
      [10,5,1],
      [4,9,8]
    ];
    expect(isMagicSquare(square)).toBe(false)
    
  });

});