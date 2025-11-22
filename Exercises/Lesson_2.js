// Numbers and Maths

// Orders of Operation
// * /  are done first
// + - are done after

// when working with money
// Best Practive is to convert them into cents
// eg: $1.75 = 175 cents
// and then convert back to dollars at the end
// eg: 175 cents = $1.75

Math.round(2.2); // 2
Math.round(2.7); // 3
//----------------------------------------------
// Lesson 2 Exercises

// 1. At restaurant you ordered one soup
// for $10 and 3 sandwich for $8 and a icecream for $5
console.log(10 + 3 * 8 + 5); // 39

// 2. Youa are at the restaurant with 2 friend (3 people total)
// You both ordered the same thing as above
// Calculate how much each of you need to pay
console.log((10 + 3 * 8 + 5) / 3); // 13

// 3. Calculate the cost of toaster ($18.50) and 2 Shirts ($7.50 each)
console.log((1850 + 2 * 750) / 100); // 33.5

// 4. Calculate the tax on the above purchase if tax is 10%
console.log(((1850 + 2 * 750) / 100) * 0.1); // 3.35

// 5. Calculate the tax on the same purchase if tax is 20%
console.log(((1850 + 2 * 750) / 100) * 0.2); // 6.7

// 6. Add a toaster(18.99) ,shirts(7.99) and a basketball ($20.95)
console.log((1899 + 799 + 2095) / 100); // 47.93

// 7. Calculate the tax on the above purchase before tax
console.log((1899 + 799 + 2095 + 499) / 100); // 52.92

// 8. Calculate the total cost after adding 10 % tax using Math.round to round
console.log((Math.round(1899 + 799 + 2098 + 499) / 100) * 0.1); // 5.29

// 9. Calculate the total cost after adding 10 % tax using Math.round to round
console.log(
  Math.round(2095 + 1899 + 799 + 499) / 100 +
    (Math.round(1899 + 799 + 2098 + 499) / 100) * 0.1
); // 58.21

// 10 Calculate temperature in Fahrenheit if temperature in Celsius is 25
console.log((25 * 9) / 5 + 32); // 77
// 11 Calculate temperature in Celsius if temperature in Fahrenheit is 86
console.log(((86 - 32) * 5) / 9); //

// 12 Calculate temperature in Fahrenheit if temperature in Celsius is -5
console.log((-5 * 9) / 5 + 32);
