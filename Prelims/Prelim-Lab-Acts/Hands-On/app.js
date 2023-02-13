//Sibal, Reuben Rob B.
//WD-201

calculation = require('./calculation');
//Values
const RatePH = 300;
const HoursWorked = 4;
const Day = 6;
const SSS = 1200;
const PagIbigFund = 300;
const PhilHealth = 400;
//Calculation
GrossInc = calculation.product(HoursWorked, RatePH * Day);
Tax = calculation.product(0.1, GrossInc);
TotalDeduct = calculation.sum(Tax + SSS + PagIbigFund + PhilHealth, 0);
Salary = calculation.difference(GrossInc, TotalDeduct);
//Display
console.log('Gross Income is: ' + GrossInc);
console.log('Tax: ' + Tax);
console.log('SSS: ' + SSS);
console.log('Pag-Ibig Fund: ' + PagIbigFund);
console.log('PhilHealth: ' + PhilHealth);
console.log('Total Deductions: ' + TotalDeduct);
console.log('Net Salary is: ' + Salary);
