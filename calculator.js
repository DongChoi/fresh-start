// Find DOM element and hold onto it, so we don't have to search for it
// every time we use it.
const calcForm = document.getElementById("calc-form");

//this gives you the html.
//in order to get the value, you do amountInput.value
const amountInput = document.getElementById("loan-amount");
const yearsInput = document.getElementById("loan-years");
const rateInput = document.getElementById("loan-rate");
const resultArea = document.getElementById("calc-monthly-payment");

/** Retrieve form values. Returns object: {amount, years, rate}. */

function getFormValues() {
  amount = Number(amountInput.value);
  years = Number(yearsInput.value);
  rate = Number(rateInput.value);
  return { amount, years, rate };
}

/** Calculate monthly payment and return. */

function calcMonthlyPayment(data) {
  let numberOfPayments = years * 12;
  let periodicInterestRate = rate / 100 / 12;
  let monthlyPayment =
    (amount * periodicInterestRate) /
    (1 - (1 + periodicInterestRate) ** -numberOfPayments);
  return monthlyPayment;
}

/** Get form values, calculate & update display. */

function getFormValuesAndDisplayResults() {
  const { amount, years, rate } = getFormValues();
  console.log(amount, years, rate);
  result = calcMonthlyPayment(amount, years, rate);
  resultArea.innerHTML = result;
}

/** Set initial form values and show initial results. Called at app start. */

function setInitialValues() {
  // you can decide on some initial values
  amountInput.value = 10000;
  yearsInput.value = 10;
  rateInput.value = 4.5;
}

/** Start: set form defaults & display; attach form submit event listener. */

function start() {
  setInitialValues();
  calcForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    getFormValuesAndDisplayResults();
  });
}
