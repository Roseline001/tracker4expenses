import { CURRENCIES, CATEGORIES } from "./data.js";

const form = document.querySelector("#expense-form");
const descriptionInput = document.querySelector("#description");
const amountInput = document.querySelector("#amount");
const currencySelect = document.querySelector("#currency");
const categorySelect = document.querySelector("#category");
const homeCurrencySelect = document.querySelector("#home-currency");
const categoryFilterSelect = document.querySelector("#category-filter");
const expenseList = document.querySelector("#expense-list");