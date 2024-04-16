let incomeSources = [
    { source: "Job", amount: 1000 },
    { source: "Freelancing", amount: 500 },
    { source: "Selling Art", amount: 250 }
];

let expenses = [
    { item: "Rent", cost: 300 },
    { item: "Groceries", cost: 150 },
    { item: "Utilities", cost: 100 },
    { item: "Subscription Services", cost: 50 }
];

function addIncome(source, amount) {
    incomeSources.push({ source, amount });
}

function addExpense(item, cost) {
    expenses.push({ item, cost });
}

function calculateSavings() {
    let totalIncome = 0;
    let totalExpenses = 0;

    // Calculate total income
    for (let income of incomeSources) {
        totalIncome += income.amount;
    }

    // Calculate total expenses
    for (let expense of expenses) {
        totalExpenses += expense.cost;
    }

    // Calculate savings
    let savings = totalIncome - totalExpenses;
    return savings;
}

// Function to print summaries
function printSummary() {
    console.log("Income Sources:");
    for (let income of incomeSources) {
        console.log(`- ${income.source}: $${income.amount}`);
    }
    console.log(`Total Income: $${incomeSources.reduce((acc, curr) => acc + curr.amount, 0)}`);
    
    console.log("\nExpenses:");
    for (let expense of expenses) {
        console.log(`- ${expense.item}: $${expense.cost}`);
    }
    console.log(`Total Expenses: $${expenses.reduce((acc, curr) => acc + curr.cost, 0)}`);
    
    let savings = calculateSavings();
    console.log(`\nTotal Savings for the Month: $${savings}`);
}

// Adding more income sources and expenses
addIncome("Investments", 200);
addIncome("Rental Income", 300);
addExpense("Transportation", 80);

// Print the summary
printSummary();
