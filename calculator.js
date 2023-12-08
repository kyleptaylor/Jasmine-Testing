window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    term: +(document.getElementById("loan-term").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const defaultValues = {amount: 330000, term: 30, rate: 5.6}
  const loanAmount = document.getElementById("loan-amount").value;
  loanAmount.value = defaultValues.amount;
  const loanTerm = document.getElementById("loan-term").value;
  loanTerm.value = defaultValues.term;
  const loanRate = document.getElementById("loan-rate").value;
  loanRate.value = defaultValues.rate;
  update()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const inputValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(inputValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  console.log(values);
  const monthlyInterestRate = values.rate / 12 / 100; 
  const totalPayments = values.term * 12; 
  return ((values.amount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments))).toFixed(2);  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById('monthly-payment');
monthlyUI.innerText = "$" + monthly;
}
