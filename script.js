// 1. Store Application Data & Collect User Input
let totalBudget = Number(prompt("Enter your total budget for the month:"));
let totalExpenses = Number(prompt("Enter your total expenses so far:"));

// 2. Create Reusable Functions
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// 3. Perform Budget Calculations
let remainingBalance = calculateBalance(totalBudget, totalExpenses);

// 4. Display Results
console.log("--- SPENDWISE BUDGET REPORT ---");
console.log("Total Monthly Budget: $" + totalBudget);
console.log("Total Expenses: $" + totalExpenses);
console.log("--------------------------------");
console.log("Remaining Balance: $" + remainingBalance);

if (remainingBalance < 0) {
    console.log("Warning: You are over budget!");
} else {
    console.log("Good job! You are within your budget.");
}
