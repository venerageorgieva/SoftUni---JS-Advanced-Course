//Funding Average With Reduce 

const numbersArr= [30, 50, 40, 10, 70]; 
const average = 
  numbersArr.reduce((total, number, index, array) => { 
		total += number; 
		if( index === array.length-1) {
 		    return total/array.length; 
		} else {  return total; } 
	}); 
console.log(average);