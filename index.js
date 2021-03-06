/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (someFood){
    if (this.stomach.length < 10) {
      this.stomach.push(someFood);
    }
}

Person.prototype.poop = function (){
  if (Person.prototype.poop){
    this.stomach.length = 0;
  }
}

Person.prototype.toString = function (){
  return `${this.name}, ${this.age}`;
}




/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill= function(gallons){
  this.tank = this.tank + gallons;
}

Car.prototype.drive = function (milesDriven){
  this.odometer = this.odometer + milesDriven;
  this.tank = this.tank - milesDriven / this.milesPerGallon;
}



/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age)
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function(x){
  let x = this.favoriteToy;
  return "Playing with " + x;
}

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:

  ********DISCLAIMER: I am using the terminology layed out in Training kit simply to name the four principles.
  ********GENERAL DEFINITION (in my own words): The "this" keword is used to reference whatever object it is typed in and will therefore be limited to the scope of that particular object.

  1. WINDOW/GLOBAL OBJECT BINDING: When the "this" keyword is used in the global scope it binds it to the window (the unseen object that everything is actually in).

  2. IMPLICIT BINDING: When the "this" keyword preceeds a dot, it is basically being used in place of the name of the object within which it is typed and can be used as such. 
    
  3. New Binding: One of the reasons using the "this" keyword for Implicit Binding is helpful is because when an constructor function is used to easily generate new objects an infinite number of objects can be created using the constructor function. Each one of the new objects will have a different name. Using the "this" keyword means that you don't need to type out the new name of each new object on each of the keys inside of said new object. Infact you don't even need to type out the keys at all (that were used in the original constructor function).
 
  4. EXPLICIT BINDING: Items that have the "this" keyword can be overwritten by using the .call and .apply methods.
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
