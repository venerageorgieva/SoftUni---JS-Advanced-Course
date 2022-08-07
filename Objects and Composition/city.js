//Receive three parameters name, population and treasury
//Create and return an object with properties of the same names
function createRecord(name, population, treasury) {
    const city = {};
    city.name = name;
    city.population = population;
    city.treasury = treasury;
    return city;


    
  }

  function createRecord(name, population, treasury) {
    return {
      name,
      population,
      treasury
    };
  }
    

createRecord('Tortuga', 7000, 15000
);