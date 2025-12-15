// Create a Variable Hour and save the current hour

const hour = 20;
const person_name = "John";

if (hour >= 6 && hour < 12) {
  console.log(`Good Morning,${person_name}!`);
} else if (hour >= 12 && hour < 18) {
  console.log(`Good Afternoon,${person_name}!`);
} else {
  console.log(`Good Night,${person_name}!`);
}

const age = 65;
const isHoldiay = false;

if (isHoldiay && (age <= 6 || age >= 60)) {
  console.log(`Discount`);
} else {
  console.log(`No Discount`);
}

const randonNumber = Math.random(); // Generates a random number between 0 and 1
let result = "";
const guess = `Head`;
if (randonNumber < 0.5) {
  console.log(`Head`);
  result = "Head";
} else {
  console.log(`Tail`);
  result = "Tail";
}
console.log(result);

if (guess === result) {
  console.log(`You Win`);
} else {
  console.log(`You Lose`);
}

let result1 = randonNumber < 0.5 ? "Head" : "Tail";
console.log(result1);
