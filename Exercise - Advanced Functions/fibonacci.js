function fibonacci() {
    
    let [a,b] = [0,1];
  //0 , 1 , 1 , 2 , 3 , 5 , 8 
  return ()=>{
      let c = a+b;
      a = b;
      b = c;
      return a;
  }
}

let fib = fibonacci();
console.log(fib);
console.log(fib);
console.log(fib);
console.log(fib);
console.log(fib);