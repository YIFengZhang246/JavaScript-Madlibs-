
let noun = "dog";
let number = "8";
let calculatedNumber = number * 2;
let isSunny = true;
let userInput = prompt("Enter an adjective to describe the day:");
let story = `Once upon a time, a ${userInput} ${noun} decided to go for a walk. It was a ${isSunny ? "sunny" : "rainy"} day with a temperature of ${calculatedNumber} degrees. The cat did ${number} different activities throughout the day.`;
console.log(story);
