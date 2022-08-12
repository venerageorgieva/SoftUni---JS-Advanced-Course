function objDemo() {
  let doubleChoco = {
    flourType: "brown",
    bonus: "fruit",
    weight: 100,
    master: {
      name: "Ivo",
    },
  };

  doubleChoco.flourType = "white";
  doubleChoco["count"] = 5;
  doubleChoco.ordered = 3;

  let copy = doubleChoco; //not the right way to make a copy
  let copyOfObject = JSON.parse(JSON.stringify(doubleChoco));

  delete doubleChoco.bonus;
//   console.log(doubleChoco);
//   console.log(copy);
//   console.log(copyOfObject);


  for(let el in doubleChoco){
      console.log(doubleChoco[el]);
  }

  let keys = Object.keys(doubleChoco);
  let values = Object.values(doubleChoco);
  let entries = Object.entries(doubleChoco); // object to array
  

}
objDemo();
