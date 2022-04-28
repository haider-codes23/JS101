let readline = require('readline-sync');

function inValidNumber(number) {
  return Number.isNaN(number) || number < 0;
}

function prompt (message) {
  console.log(`==> ${message}`);
}
while (true) {
  prompt('Welcome To Mortgage Calculator / Car Loan Calculator!\n');
  prompt("Car Loan Calculator => 1");
  prompt("Mortgage Calculator => 2\n");
  prompt("To Calculate Your Monthly Car Payments Choose Option 1 and Press Enter");
  prompt("Electic Cars have 0% Annual Interest Rate\n");
  prompt("To Calculate Monthly Mortgage Payments Choose Option 2 and Press Enter");
  prompt("Mortgage have a minimum Annual Interest Rate of 0.6%\n");

  let purposeOfLoan = Number(readline.question());

  while (![1, 2].includes(purposeOfLoan)) {
    prompt("Hmm, That dosen't look like a Valid Choice Please Enter your Purpose of Borrowing a loan Again:");
    purposeOfLoan = Number(readline.question());
  }

  prompt('Please Enter the Amount in Dollars that you want to Borrow: \n');
  let loanAmountInDollars = Number(readline.question());

  while (inValidNumber(loanAmountInDollars)) {
    prompt("Hmmm. That doesn't seem like a valid Amount, Please Enter The Amount in dollars you want to borrow again:");
    loanAmountInDollars = Number(readline.question());
  }

  prompt('Please Enter the Duration of the Loan in Years(e.g 6 for 6 years) \n => Should be anywhere between 3 to 30 years: \n');
  let loanDurationInYears = Number(readline.question());

  while (inValidNumber(loanDurationInYears) ||
  loanDurationInYears < 3 ||
    loanDurationInYears > 30) {
    prompt("Hmm, That's not a valid duration please Enter the Duration of the loan again:");
    loanDurationInYears = Number(readline.question());
  }

  let loanDurationInMonths = loanDurationInYears * 12;

  let annualPercentageRate;
  let monthlyInterestRate;
  let monthlyPayment;

  switch (purposeOfLoan) {
    case 1:
      prompt("Enter the Annual Percentage Rate on your Car Loan (e.g. 12.5 for 12.5% or 7 for 7% or 0 for 0%):\n");
      annualPercentageRate = parseFloat(readline.question());

      while (inValidNumber(annualPercentageRate)) {
        prompt("Hmm...Thats not Valid, Please Enter a Valid Annual Percentage Rate Again");
        annualPercentageRate = parseFloat(readline.question());
      }

      monthlyInterestRate = (annualPercentageRate / 100) / 12;

      if (annualPercentageRate === 0) {
        monthlyPayment = loanAmountInDollars / loanDurationInMonths;
      } else {
        monthlyPayment = loanAmountInDollars * (monthlyInterestRate /
        (1 - Math.pow((1 + monthlyInterestRate), -loanDurationInMonths)
        ));
      }
      break;
    case 2:
      prompt("Enter the Annual Percentage Rate on your Mortgage (e.g. 12.5 for 12.5% or 7 for 7%): \n");
      annualPercentageRate = parseFloat(readline.question());

      // eslint-disable-next-line max-len
      while (inValidNumber(annualPercentageRate) && annualPercentageRate !== 0) {
        prompt("Hmm...Thats not Valid, Please Enter a Valid Annual Percentage Rate Again");
        annualPercentageRate = parseFloat(readline.question());
      }

      monthlyInterestRate = (annualPercentageRate / 100) / 12;

      monthlyPayment = loanAmountInDollars *
      (monthlyInterestRate /
      (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths))
      ));
      break;
  }

  if (purposeOfLoan === 1) {
    prompt(`Your Monthly Car Payment is $${monthlyPayment}\n`);
  } else if (purposeOfLoan === 2) {
    prompt(`Monthly Payment on your Mortgage is $${monthlyPayment}\n`);
  }

  prompt("If You would like to Perform another Calculation Press 'y' for Yes: \n");
  let answer = readline.question();
  if (answer[0].toLowerCase() !== 'y') break;
}
