class footballTeam {

    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        footballPlayers.map(p => {
            let [name, age, playerValue] = p.split('/');
            age = Number(age);
            playerValue = Number(playerValue);

            let player = this.invitedPlayers.find(p => p.name == name);
            if (player) {
                if (player.playerValue < playerValue) {
                    player.playerValue = playerValue;
                }
            } else {
                this.invitedPlayers.push({ name, age, playerValue });
            }
        });
        let result = [];
        this.invitedPlayers.map(p => {
            result.push(p.name);
        });
        return `You Successfully invite ${result.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        let boughtPlayer = '';
        let buyingPrice = 0;

        
            let [name, playerOffer] = selectedPlayer.split('/');
            playerOffer = Number(playerOffer);
            let player = this.invitedPlayers.find(a => a.name == name);
            if (player) {

                if (player.playerValue > playerOffer) {
                    let priceDifference = player.playerValue - playerOffer;
                    throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`)
                }
                else {
                    player.playerValue = 'Bought';
                    boughtPlayer = player.name;
                    buyingPrice = playerOffer;
                }
            } else {
                throw new Error(`${name} is not invited to the selection list!`)
            }


        return `Congratulations! You sign a contract with ${boughtPlayer} for ${buyingPrice} million dollars.`;
    }

    ageLimit(name, age) {
        let player = this.invitedPlayers.find(a => a.name == name);
        if (player) {
            if (player.age > age) {
                return `${name} is above age limit!`
            } else if (player.age < (age + 5)) {
                let ageDifference = age - player.age;
                if (ageDifference < 5 && ageDifference > 0) {
                    return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
                } else {
                    return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
                }
            }
        } else {
            throw new Error(`${name} is not invited to the selection list!`)
        }
    }

    transferWindowResult() {
        let result = [];

        result.push("Players list:");
        this.invitedPlayers.sort((a, b) => a.name - b.name).map(e => result.push(`Player ${e.name}-${e.playerValue}`));
        return result.join("\n");
    }
}