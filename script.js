// JavaScript Fundamentals Part 1

// LECTURE: Values and Variables

const country = "United States of America";
const continent = "North America";
let population = 335474247;

console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Types

const isIsland = false;
let language;

console.log(country);
console.log(isIsland);
language = "English";
console.log(language);
console.log(population);

// LECTURE: let, const and var
// let = variables whose values can change let age = 25; age = 26;
// const = variables whose values can't change const birthYear = 1997;
// var Prior to ES6, avoid when possible

language = "English";

// LECTURE: Basic Operators

// Math Operators

/*const now = 2022;
const ageBradley = now - 1997;
const ageRosa = now - 2000;
console.log(ageBradley, ageRosa);
console.log(ageBradley * 2, ageBradley / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3
const firstName = "Bradley";
const lastName = "Jester";
console.log(firstName + " " + lastName);

// Assignment Operators

let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
console.log(x);

// Comparison Operators
console.log(ageBradley > ageRosa); // >, <, >=, <=
console.log(ageRosa >= 18);
const isAnAdult = ageRosa >= 18;
console.log(now - 1997 > now - 2015);

population /= 2;
console.log(population);
population += 1;
console.log(population);
const finlandPopulation = 6000000;
console.log(population > finlandPopulation);
averageCountry = 33000000;
console.log(population < averageCountry);
population -= 1;
population *= 2;
console.log(population);
console.log(
  `The ${country} is in ${continent} and its ${population} people speak ${language}."`
);*/

// LECTURE: Operator Precedence

const now = 2022;
const ageBradley = now - 1997;
const ageRosa = now - 2000;
console.log(now - 1997 > now - 2015);
console.log(25 - 10 - 5);

let y, z;
y = z = 20 - 10 - 5; // y = z = 10, x = 10
console.log(y, z);
const averageAge = (ageBradley + ageRosa) / 2;
console.log(ageBradley, ageRosa, averageAge);

// Coding Challenge #1

/*const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);*/

// LECTURE Strings and Template Literals

const Name = "Bradley";
const job = "Student";
const birthYear = 1997;
const year = 2022;

const Brad =
  "I'm " + Name + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(Brad);

const bradNew = `I'm ${Name}, a ${year - birthYear} year old ${job}!`;
console.log(bradNew);

// LECTURE if/else Statements

const age = 19;

if (age >= 18) {
  console.log("Bob can get his driver's license 🚘");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Bob is too young. He needs to wait another {yearsLeft} year(s).`
  );
}

// Coding Challenge #2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

// LECTURE Type Conversion

const inputYear = "2022";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(typeof NaN);

console.log(String(22), 22);

// LECTURE Type Coercion

console.log("I am " + 25 + " years old");
console.log("25" + "10" + 5); // Result 25105 instead of 40
console.log("25" - "10" - 5);
console.log("25" * "2");
console.log("25" / "2");

// LECTURE Truthy and Falsy values

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean("Bradley"));

const money = 0;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined!");
} else {
  console.log("Height is UNDEFINED");
}

// LECTURE Equality Operators

const howOldIAm = 18;
if (age === 18) console.log("I just became an adult!");
// === Strict Equality Operator (No Type Coercion)
// == Loose Equality Operator '18' == 18 (Type Coercion) 18 the string equals 18 the number in loose equality operation

/*
const favoriteNumber = prompt("What's your favorite number?");
console.log(favorite);
console.log(typeof favorite);

if (favoriteNumber == 7) {
  console.log("Cool! 7 is an amazing number!");
} else if (favoriteNumber == 13) {
  console.log("13 is an unlucky number!");
} else {
  console.log("Number isn't 7 or 13!");
}
*/

/*
if (favoriteNumber !== 100) 
console.log("Why not 100?");
*/

// Logical Operators

// && Everything Must Be True Or Else False
// || True If Only One Is True, False If Both Are False
// ! Logical Not: False is True and True is False

const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

/*
if (shouldDrive) {
  console.log("Bradley is able to drive!");
} else {
  console.log("Some else should drive...");
}
*/

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Bradley is able to drive!");
} else {
  console.log("Some else should drive...");
}

// Coding Challenge #3

const scoreDolphins = 96 + 108 + 89 / 3;
const scoreKoalas = 88 + 91 + 100 / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy 🏆");
} else {
  console.log("Both win the trophy!");
}

// Switch Statement

const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend!");
    break;
  default:
    console.log("Not a valid day!");
}

// LECTURE Statements & Expression
// 3 + 4, 1997, true && false && !false An Expression because it produces a Boolean value

if (33 > 22) {
  const str = "33 is the bigger number!";
} // Statement

console.log(`I'm ${2022 - 1997} years old`); // Expression

// The Conditional (Ternary) Operator

const personAge = 23;

// age >= 18
//  ? console.log("I like to drink wine")
//  : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

// Coding Challenge #4

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value was ${
    bill + tip
  }`
);
// End
