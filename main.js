import { CURRENCIES, CATEGORIES } from "./data.js";

const form = document.querySelector("#expense-form");
const descriptionInput = document.querySelector("#description");
const amountInput = document.querySelector("#amount");
const currencySelect = document.querySelector("#currency");
const categorySelect = document.querySelector("#category");
const homeCurrencySelect = document.querySelector("#home-currency");
const categoryFilterSelect = document.querySelector("#category-filter");
const expenseList = document.querySelector("#expense-list");

function refresh() {
  render(getState(), CATEGORIES);
}

fillSelect(currencySelect, CURRENCIES, "USD");
fillSelect(categorySelect, CATEGORIES, CATEGORIES[0]);
fillSelect(homeCurrencySelect, CURRENCIES, getState().homeCurrency);
fillSelect(categoryFilterSelect, ["All", ...CATEGORIES], "All");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const description = descriptionInput.value.trim();
  const amount = Number(amountInput.value);

  if (description === "") {
    showFormError("Please enter a description.");
    return;
  }
  if (!(amount > 0)) {
    showFormError("Please enter an amount greater than 0.");
    return;
  }

  clearFormError();
  addExpense({
    description,
    amount,
    currency: currencySelect.value,
    category: categorySelect.value,
  });

  form.reset();
  currencySelect.value = "USD";
  descriptionInput.focus();
  refresh();
});

expenseList.addEventListener("click", (event) => {
  if (!event.target.classList.contains("btn-delete")) return;

  const id = Number(event.target.closest(".expense-item").dataset.id);
  deleteExpense(id);
  refresh();
});

expenseList.addEventListener("change", (event) => {
  if (!event.target.classList.contains("category-select")) return;

  const id = Number(event.target.closest(".expense-item").dataset.id);
  updateExpenseCategory(id, event.target.value);
  refresh();
});

homeCurrencySelect.addEventListener("change", () => {
  setHomeCurrency(homeCurrencySelect.value);
  refresh();
});

categoryFilterSelect.addEventListener("change", () => {
  setCategoryFilter(categoryFilterSelect.value);
  refresh();
});

refresh();