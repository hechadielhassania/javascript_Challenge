// Test data
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

const dolphinsScores2 = [97, 112, 101];
const koalasScores2 = [109, 95, 123];

const dolphinsScores3 = [97, 112, 101];
const koalasScores3 = [109, 95, 106];

// Function to calculate average score
const calcAverage = scores => {
    const sum = scores.reduce((acc, cur) => acc + cur, 0);
    return sum / scores.length;
};

// Function to determine winner
const determineWinner = (dolphinsScores, koalasScores) => {
    const dolphinsAverage = calcAverage(dolphinsScores);
    const koalasAverage = calcAverage(koalasScores);

    if (dolphinsAverage >= 100 && dolphinsAverage > koalasAverage) {
        console.log("Dolphins win with an average score of", dolphinsAverage);
    } else if (koalasAverage >= 100 && koalasAverage > dolphinsAverage) {
        console.log("Koalas win with an average score of", koalasAverage);
    } else if (dolphinsAverage >= 100 && koalasAverage >= 100 && dolphinsAverage === koalasAverage) {
        console.log("It's a draw with an average score of", dolphinsAverage);
    } else {
        console.log("No team wins the trophy");
    }
};

// Test cases
console.log("Test data 1:");
determineWinner(dolphinsScores1, koalasScores1);

console.log("\nTest data 2 (Bonus 1):");
determineWinner(dolphinsScores2, koalasScores2);

console.log("\nTest data 3 (Bonus 2):");
determineWinner(dolphinsScores3, koalasScores3);
