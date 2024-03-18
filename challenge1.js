// Data for Mark
let markMass1 = 78; // in kg
let markHeight1 = 1.69; // in meters

let markMass2 = 95; // in kg
let markHeight2 = 1.88; // in meters

// Data for John
let johnMass1 = 92; // in kg
let johnHeight1 = 1.95; // in meters

let johnMass2 = 85; // in kg
let johnHeight2 = 1.76; // in meters

// Calculate BMI for Mark (using both variations)
let markBMI1 = markMass1 / (markHeight1 ** 2);
let markBMI2 = markMass2 / (markHeight2 * markHeight2);

// Calculate BMI for John (using both variations)
let johnBMI1 = johnMass1 / (johnHeight1 ** 2);
let johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);

// Determine if Mark has a higher BMI than John
let markHigherBMI1 = markBMI1 > johnBMI1;
let markHigherBMI2 = markBMI2 > johnBMI2;

// Output the results
console.log("Data 1:");
console.log("Mark's BMI:", markBMI1);
console.log("John's BMI:", johnBMI1);
console.log("Is Mark's BMI higher than John's? ", markHigherBMI1);

console.log("\nData 2:");
console.log("Mark's BMI:", markBMI2);
console.log("John's BMI:", johnBMI2);
console.log("Is Mark's BMI higher than John's? ", markHigherBMI2);
