function stringLength(str1,str2,str3){
let str1L = str1.length;
let str2L = str2.length;
let str3L = str3.length;

let sumLength = str1L+str2L+str3L;
let avgLength = Math.floor(sumLength / 3);

console.log(sumLength);
console.log(avgLength);
}

stringLength('chocolate', 'ice cream', 'cake');