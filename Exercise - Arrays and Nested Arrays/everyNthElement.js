function everyNthElement(array,step){

    let resultArr = [];
    for(let index = 0;index < array.length;index+=step){
        resultArr.push(array[index]);
    }
    return resultArr;
}

everyNthElement(['1', 
'2',
'3', 
'4', 
'5'], 
6
);