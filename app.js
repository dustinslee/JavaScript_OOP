console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  removeHobby(hobby) {
    this.hobbies.splice(this.hobbies.findIndex(item => item == hobby),1);
    // this.hobbies = this.hobbies.filter(item => item != hobby);
  }

  greeting() {
    console.log("Hello fellow person!");
  }

  info() {
    console.log("Name:",this.name);
    console.log("Number of pets:",this.pets);
    console.log("Residence:",this.residence);
    console.log("Hobbies:",this.hobbies);
  }

  soundOff(boolean) {
    return boolean ? console.log("Sound is off") : console.log("Sound is on");
  }
}

// Exercise 2 Section 
console.log("EXERCISE 2:\n==========\n");
class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Developer";
  }

  greeting() {
    console.log(`Hello! My name is ${this.name} and I'm a ${this.occupation}!`);
  }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let frodo = new Person("Frodo", 1, '123 Bag End', ['running','eating','adventuring']);
frodo.greeting();
frodo.info();
frodo.addHobby('sleeping');
console.log("Hobbies after adding:",frodo.hobbies);
frodo.removeHobby('sleeping');
console.log("Hobbies after removal:",frodo.hobbies);
console.log("==========\n");
let myCoder = new Coder("Dustin",1,"123 Dustin St", ['running','eating']);
myCoder.greeting();
myCoder.info();

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
class Calculator {
  result = 0;

  add(x,y) {
    let b = y != undefined ? y : this.result;
    this.result = x+b;
    return this.result;
  }

  subtract(x,y) {
    let a = y != undefined ? x : this.result;
    let b = y != undefined ? y : x;
    this.result = a-b;
    return this.result
  }

  multiply(x,y) {
    let b = y != undefined ? y : this.result;
    this.result = x*b;
    return this.result;
  }

  divide(x,y) {
    let a = y != undefined ? x : this.result;
    let b = y != undefined ? y : x;
    this.result = a/b;
    return this.result;
  }

  displayResult() {
    console.log("The result is:",this.result);
  }
}
let myCalc = new Calculator();
console.log("Expected 3 got:",myCalc.add(2,1));
console.log("Expected 4 got:",myCalc.add(1));
console.log("Expected 1 got:",myCalc.subtract(1,2));
console.log("Expected -2 got:",myCalc.subtract(1));
console.log("Expected 2 got:",myCalc.multiply(1,2));
console.log("Expected 4 got:",myCalc.multiply(2));
console.log("Expected 0.5 got:",myCalc.divide(1,2));
console.log("Expected 0.25 got:",myCalc.divide(2));
console.log("Expected 1.25 got:",myCalc.add(1));
console.log("Expected -0.75 got:",myCalc.subtract(2));
console.log("Expected -2.25 got:",myCalc.multiply(3));
console.log("Expected -0.45 got:",myCalc.divide(5));
console.log("Expected 1 got:",myCalc.add(0,1));