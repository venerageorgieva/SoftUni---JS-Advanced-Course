// const assert = require('assert').strict;
const solve = require('./1-sub-sum.js')

function test(){
    //Arrange
    let expectedSum = 150;
    let numbers = [10,20,30,40,50,60];
    let startIndex = 3;
    let endIndex = 300;
  
    //Act
    let actualSum = solve(numbers,startIndex,endIndex);
  
    //Assert
    // assert.equal(actualSum,expectedSum);

    let testResult = false;

    if(actualSum == expectedSum){
      console.log('correct');
      testResult = true;
    } else {
      console.log('Error');
    }

    
 
  }
  
  test();