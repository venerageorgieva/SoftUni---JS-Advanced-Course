function cookingByNumbers(num,p1,p2,p3,p4,p5){

    let inputAsNumber = Number(num);
    let arrOfCommands = [p1,p2,p3,p4,p5];

    let chop = function(){
        return inputAsNumber/2;
    };
    let dice = function(){
        return Math.sqrt(inputAsNumber);
    };
    let spice = function(){
        return inputAsNumber+1;
    };
    let bake = function(){
        return Math.floor(inputAsNumber*3);
    };
    let fillet = function(){
        return Math.floor(inputAsNumber * 0.80);
    }

    for(let i = 0; i < arrOfCommands.length;i++){
        let currentCommand = arrOfCommands[i];
       switch(currentCommand){
         case 'chop':
             inputAsNumber = chop(inputAsNumber);
             console.log(inputAsNumber);
             break;
             case 'dice':
                inputAsNumber = dice(inputAsNumber);
                console.log(inputAsNumber);
                break;
                 case 'spice':
                    inputAsNumber = spice(inputAsNumber);
                    console.log(inputAsNumber);
                    break;
                     case 'bake':
                        inputAsNumber = bake(inputAsNumber);
                        console.log(inputAsNumber);
                        break;
                         case 'fillet':
                            inputAsNumber = fillet(inputAsNumber);
                            console.log(inputAsNumber);
                            break;
       }
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');