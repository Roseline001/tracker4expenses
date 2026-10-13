import { SAMPLE_RATES } from "./data.js";

let state = {
  expenses: [],
  homeCurrency: "USD",
  categoryFilter: "All",
  rates: SAMPLE_RATES,
};

let nextId = 1;

export function getState() {
  return state;
}

export function addExpense({ description, amount, currency, category }) {
  const newExpense = { id: nextId++, description, amount, currency, category };
  state = { ...state, expenses: [...state.expenses, newExpense] };
}

export function deleteExpense(id) {
  state = {
    ...state,
    expenses: state.expenses.filter((expense) => expense.id !== id),
  };
}

export function updateExpenseCategory(id, newCategory) {
  state = {
    ...state,
    expenses: state.expenses.map((expense) =>
      expense.id === id ? { ...expense, category: newCategory } : expense
    ),
  };
}

export function setHomeCurrency(currency) {
  state = { ...state, homeCurrency: currency };
}

export function setCategoryFilter(category) {
  state = { ...state, categoryFilter: category };
}