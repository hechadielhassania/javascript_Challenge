// Function to calculate the tip using a ternary operator
const calculateTip = bill => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    return tip;
};

// Test cases
const bills = [275, 40, 430];

bills.forEach(bill => {
    const tip = calculateTip(bill);
    const total = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
});
