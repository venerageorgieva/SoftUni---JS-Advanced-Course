class footballTeam {
  constructor(clubname, country) {
    this.clubname = clubname;
    this.country = country;
    this.invitedPlayers = [];
  }

  newAdditions(footballPlayers) {
   
    let players = [];
    for (let i = 0; i < footballPlayers.length; i++) {
      let [name, age, playerValue] = footballPlayers[i].split('/');
      playerValue = Number(playerValue);
      if (!this.invitedPlayers.includes(this.invitedPlayers[name])) {
        this.invitedPlayers.push({ name, age, playerValue });
        if (!players.includes(name)) {
          players.push(name);
        }
      } else if (this.invitedPlayers[playerValue] < playerValue) {
        this.invitedPlayers[playerValue] = playerValue;
      }
    }

    return `You successfully invite ${players.join(', ')}.`;
  }

  signContract(selectedPlayer) {
    let [nameOfPlayer, playerOffer] = selectedPlayer.split('/');
    playerOffer = Number(playerOffer);

    const currentPlayer = this.invitedPlayers.find(
      ({ name }) => name === nameOfPlayer
    );

    if (currentPlayer === undefined) {
      throw new Error(`${nameOfPlayer} is not invited to the selection list!`);
    }

    let value = currentPlayer.playerValue;

    if (playerOffer < value) {
      let diff = Number(value - playerOffer);
      throw new Error(
        `The manager's offer is not enough to sign a contract with ${currentPlayer.name}, ${diff} million more are needed to sign the contract!`
      );
    }else{
      currentPlayer.playerValue = 'Bought'
      return `Congratulations! You sign a contract with ${nameOfPlayer} for ${playerOffer} million dollars.`
    }
  }
  ageLimit(name, age) {
     let nameOfPlayer = name;
     let ageOfPlayer = Number(age);

    const currentPlayer = this.invitedPlayers.find(
      ({ name }) => name === nameOfPlayer
    );

    if (currentPlayer === undefined) {
      throw new Error(`${nameOfPlayer} is not invited to the selection list!`);
    }
     let diff = ageOfPlayer - currentPlayer.age;
    if (currentPlayer.age < ageOfPlayer) {
     
      if (diff < 5 && diff > 0) {
          return `${nameOfPlayer} will sign a contract for ${diff} years with ${this.clubname} in ${this.country}!`
      }else if(diff){
        return `${nameOfPlayer} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
      }
    }else if(currentPlayer.age >= ageOfPlayer){
     return `${nameOfPlayer} is above age limit!`
    }

  }
 
  transferWindowResult() {
    let result = [];

    result.push("Players list:");
    this.invitedPlayers.sort((a, b) => a.name - b.name).map(e => result.push(`Player ${e.name}-${e.playerValue}`));
    return result.join("\n");
}
}

//* 01 test
// let fTeam = new footballTeam('Barcelona', 'Spain');
// console.log(
//   fTeam.newAdditions([
//     'Kylian Mbappé/23/160',
//     'Lionel Messi/35/50',
//     'Pau Torres/25/52',
//     'Pau Torres/25/72',
//   ])
// );
// console.log(fTeam.ageLimit('Lionel Messi', 33));
// console.log(fTeam.ageLimit('Kylian Mbappé', 30));
// console.log(fTeam.ageLimit('Pau Torres', 26));
// console.log(fTeam.signContract('Kylian Mbappé/240'));

// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Lionel Messi is above age limit!
// Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
// Pau Torres will sign a contract for 1 years with Barcelona in Spain!
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars.


//* 02 test
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

/* 
You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
 Congratulations! You sign a contract with Lionel Messi for 60 million dollars.
 Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars. 
 Uncaught Error: Barbukov is not invited to the selection list! 
 */

//* 03 test
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars. 
// Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
// Players list:
// Player Kylian Mbappé-Bought
// Player Lionel Messi-50
//Player Pau Torres-52




