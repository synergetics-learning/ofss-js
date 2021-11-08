// Demo-03.js
// Operators : Arithmetic, Conditional , Logical
// Control Statements: Conditional and Iterations

// prompt for User input (string) and parseFloat to convert into number
let amt = parseFloat(prompt('Enter principle amount: ' ,10000));
let rt  = parseFloat(prompt('Enter rate of interest: ',5.5));
let dur = parseInt(prompt('Enter duration in months: ',36));

if (amt < 10000 || amt > 10000000) {
    alert("Amount is outside the range of 10,000 <-> 1,00,00,00,000");
}

if (rt < 2 || rt > 20 ){
    alert ("Rate of interest is ");
}

