// Create a BudgetTracker class to manage income and expenses
class BudgetTracker {
    constructor() {
        // Initialize arrays to store income and expenses
        this.incomes = [];
        this.expenses = [];
    }

    // Method to add an income item to the incomes array
    addIncome(description, amount) {
        this.incomes.push({ description, amount });
    }

    // Method to add an expense item to the expenses array
    addExpense(description, amount) {
        this.expenses.push({ description, amount });
    }

    // Method to calculate the total income
    calculateTotalIncome() {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    }

    // Method to calculate the total expenses
    calculateTotalExpenses() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    }

    // Method to calculate the total balance by subtracting expenses from income
    calculateTotalBalance() {
        return this.calculateTotalIncome() - this.calculateTotalExpenses();
    }
}

// Create an instance of the BudgetTracker class
const budget = new BudgetTracker();

// Function to update the summary on the page
function updateSummary() {
    //Retrieve elements from HTML by ID
    const totalIncomeElement = document.getElementById('total-income');
    const totalExpensesElement = document.getElementById('total-expenses');
    const totalBalanceElement = document.getElementById('total-balance');

    // Calculate the total income, expenses, and balance
    const totalIncome = budget.calculateTotalIncome();
    const totalExpenses = budget.calculateTotalExpenses();
    const totalBalance = budget.calculateTotalBalance();

    // Update the HTML elements with the calculated values
    totalIncomeElement.textContent = totalIncome.toFixed(2);
    totalExpensesElement.textContent = totalExpenses.toFixed(2);
    totalBalanceElement.textContent = totalBalance.toFixed(2);
}

// Function to add an income item
function addIncome() {
    // Get description and amount from input fields
    const description = document.getElementById('income-description').value;
    const amount = parseFloat(document.getElementById('income-amount').value);

    // Check if description and amount are provided
    if (description && amount) {
        // Add the income item to the budget
        budget.addIncome(description, amount);
        updateSummary();
    }
}

// Function to add an expense item
function addExpense() {
    // Get description and amount from input fields
    const description = document.getElementById('expense-description').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    // Check if description and amount are provided
    if (description && amount) {
        // Add the expense item to the budget
        budget.addExpense(description, amount);
        updateSummary();
    }
}

// Initial update of the summary when the page loads
updateSummary();