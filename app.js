//Exercise 1

// class Person {
//     constructor(name, pets, residence, hobbies) {
//         this.name = name;
//         this.pets = pets;
//         this.residence = residence;
//         this.hobbies = hobbies;
//     }

//     addHobby(hobby) {
//         this.hobbies.push(hobby);
//     }
//     //going to push it to the last item in the hobbies list

    // removeHobby(hobby) {
    //     let foundIdx = this.hobbies.indexOf(hobby);

    //     //collect all values before value (found index)
    //     //collect all values after value
    //     //update hobbies
    //     let valuesBefore = this.hobbies.slice(0, foundIdx);
    //     let valuesAfter = this.hobbies.slice(foundIdx + 1);
    //     this.hobbies = valuesBefore.concat(valuesAfter);
    // }

    //if it doesn't find a value, does it return null (undefined?), or does it return an empty array, depending on what it returns drastically determines whether this will work or not
//or use filter method (creates a new array), returns a value that coerces to true to keep the item or false to exclude or filter it out (return false
// //**remember that it returns a new array, so if you want to update hobbies I need to reassign the returned array back to hobbbies
//     removeHobby(rmHobby) {
//     this.hobbies = this.hobbies.filter((hobby) => hobby != rmHobby);
//     //iterate through every hobby in my hobbies list, if it equals the removeHobby list that returns false (filters it out) returns a new array that we can asign to this.hobbies
//     //if has duplicate hobbies will remove duplicate (does one better than the above foundIdx)
// }
//it returns a new array, so if I want to update hobbies I need to reassign the returned array back to hobbies


//     greeting() { 
//         console.log("Hello fellow person!");
//     }

// //override the Object.prototype.toString
//     toString()) {
        
//     }
// }; 


//or
// removeHobby(rmHobby) {
//     //find the index of rmHobby
//     let foundIdx = this.hobbies.indexOf(rmHobby);
// use slice to remove the index value
//     this.hobbies.splice(foundIdx, 1);
// };

//Exercise 2

// class Coder extends Person {
//     constructor(name, pets, residence, hobbies, occupation) {
//         super(name, pets, residence, hobbies) 

//             this.occupation = occupation
//     }

//     greeting() {
//         console.log("Hello, fellow coder!");
//     }
// };


//Exercise 3

// let coder = new Coder("Caitlin", 1, "Chicago", ["Hiking", "Swimming"], "Full Stack Web Developer");

// coder.addHobby("Fencing");

// console.log(coder);

// coder.removeHobby("Swimming");

// // let coderName = new Coder("Lucy", 0, "Chicago", ["Running", "Playing"]);
// console.log(coder);


//Exercise 4

class Calculator {
     result = 0;

     //or 
    //  constructor() {
    //     this.result = 0;
    //  }

    add(a, b) {
        let res;

        if (b == undefined) {
            res = this.result + a; 
            //should be first expression instead of a
        } else {
            res = a + b;
        }
        this.result = res;
        return this.result;
    }

    subtract(a, b) {
        this.result = a - b;
        return this.result;
    }

    multiply(a, b) {
        this.result = a * b;
        return this.result;
    }

    divide(a, b) {
        this.result = a / b;
        return this.result;
    }

    displayResult() {
        console.log(this.result);
    }
};

let calc = new Calculator();


calc.add(1,1);
calc.displayResult();
calc.add(9); // equals 11 bc previous value was 2
calc.displayResult();
calc.subtract(4,2);
calc.displayResult();
calc.multiply(1,2);
calc.displayResult();
calc.divide(4,2);
calc.displayResult();
