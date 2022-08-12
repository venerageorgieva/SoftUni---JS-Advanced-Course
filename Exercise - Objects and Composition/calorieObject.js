function calorieObject(input){

let obj = {};
let inputL = input.length;

for(let index = 0;index < inputL;index += 2){
    let productName = input[index];
    let calories = Number(input[index + 1]);
    obj[productName] = calories;
}

console.log(obj);

}

calorieObject(['Yoghurt', '48', 'Rice', '138', 'Apple', '52']);

