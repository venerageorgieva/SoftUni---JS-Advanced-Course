const myArr = [10,20,30,40];

const result = myArr.reduce(reducer,0);

console.log(result);

function reducer(accumulator,value){
    console.log('acc',accumulator,'+val',value);
    return accumulator + value;
}