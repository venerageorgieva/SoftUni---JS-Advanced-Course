class JobOffers {
  constructor(employer, position) {
    this.employer = employer;
    this.position = position;
    this.jobCandidates = [];
  }

  jobApplication(candidates) {
    let candidateNames = [];

    candidates.map((e) => {
      let [name, education, yearsExperience] = e.split('-');
      yearsExperience = Number(yearsExperience);
      let employee = this.jobCandidates.find((e) => e.name == name);
      if (employee) {
        if (employee.yearsExperience < yearsExperience) {
          employee.yearsExperience = yearsExperience;
        }
      } else {
        candidateNames.push(name);
        this.jobCandidates.push({ name, education, yearsExperience });
      }
    });

    return `You successfully added candidates: ${candidateNames.join(', ')}.`;
  }

  jobOffer(chosenPerson) {
    let [name, minimalExperience] = chosenPerson.split('-');
    let employee = this.jobCandidates.find((e) => e.name == name);

    if (employee == undefined) {
      throw new Error(`${name} is not in the candidates list!`);
    }

    if (
      employee.yearsExperience < minimalExperience &&
      employee.yearsExperience != 'hired'
    ) {
      throw new Error(
        `${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`
      );
    }

    employee.yearsExperience = 'hired';
    return `Welcome aboard, our newest employee is ${name}.`;
  }
  salaryBonus(name) {
    let employee = this.jobCandidates.find((e) => e.name == name);

    if (employee == undefined) {
      throw new Error(`${name} is not in the candidates list!`);
    }

    if(employee.education == 'Bachelor'){
        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
    }else if(employee.education == 'Master'){
        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
    }else{
        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
    }

  }
  candidatesDatabase() {
      if (this.jobCandidates.length <= 0) {
          throw new Error("Candidate Database is empty!")
      }

      let result = [];

      result.push("Candidates list:");
      this.jobCandidates.sort((a, b) => a.name - b.name).map(e => result.push(`${e.name}-${e.yearsExperience}`));
      return result.join("\n");
  }
}
//* Input 01
// let Jobs = new JobOffers('Google', 'Strategy Analyst');
// console.log(
//   Jobs.jobApplication([
//     'John Doe-Bachelor-10',
//     'Peter Parker-Master-5',
//     'Daniel Jones- Bachelor-18',
//   ])
// );
//You successfully added candidates: John Doe, Peter Parker, Daniel Jones.

//* Input 02
// let Jobs = new JobOffers('Google', 'Strategy Analyst');
// console.log(
//   Jobs.jobApplication([
//     'John Doe-Bachelor-10',
//     'Peter Parker-Master-5',
//     'Daniel Jones- Bachelor-18',
//   ])
// );
// console.log(Jobs.jobOffer('John Doe-8'));
// console.log(Jobs.jobOffer('Peter Parker-4'));
// console.log(Jobs.jobOffer('John Jones-8'));
//  You successfully added candidates: John Doe, Peter Parker, Daniel Jones.
//  Welcome aboard, our newest employee is John Doe.
//  Welcome aboard, our newest employee is Peter Parker.
//  Uncaught Error Error: John Jones is not in the candidates list!

//* Input 03
// let Jobs = new JobOffers ("Google", "Strategy Analyst");
//  console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
//  console.log(Jobs.jobOffer("John Doe-8"));
//  console.log(Jobs.jobOffer("Peter Parker-4"));
//  console.log(Jobs.salaryBonus("John Doe"));
//  console.log(Jobs.salaryBonus("Peter Parker"));
//  You successfully added candidates: John Doe, Peter Parker, Daniel Jones.
//  Welcome aboard, our newest employee is John Doe.
//  Welcome aboard, our newest employee is Peter Parker.
//  John Doe will sign a contract for Google, as Strategy Analyst with a salary of $50,000 per year!
//  Peter Parker will sign a contract for Google, as Strategy Analyst with a salary of $60,000 per year!

//* Input 04
let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5","Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
 console.log(Jobs.jobOffer("John Doe-8"));
 console.log(Jobs.jobOffer("Peter Parker-4"));
 console.log(Jobs.jobOffer("Jordan Cole-4"));
 console.log(Jobs.salaryBonus("Jordan Cole"));
 console.log(Jobs.salaryBonus("John Doe"));
 console.log(Jobs.candidatesDatabase());

//  You successfully added candidates: John Doe, Peter Parker, Jordan Cole, Daniel Jones.
// Welcome aboard, our newest employee is John Doe.
// Welcome aboard, our newest employee is Peter Parker.
// Welcome aboard, our newest employee is Jordan Cole.
// Jordan Cole will sign a contract for Google, as Strategy Analyst with a salary of $40,000 per year!
// John Doe will sign a contract for Google, as Strategy Analyst with a salary of $50,000 per year!
// Candidates list:
// Daniel Jones-18
// John Doe-hired
// Jordan Cole-hired
// Peter Parker-hired
