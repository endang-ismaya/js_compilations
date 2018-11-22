/* jshint: esversion: 6 */

// variable
var nameOfVariable = 5;
console.log(nameOfVariable);

var VAT = 23;
var netPriceOfShoes = 100;
var netPriceOfTV = 959;

var grossPriceOfShoes = netPriceOfShoes * (1 + VAT * 1/100);
var grossPriceOfTV = netPriceOfTV * (1 + VAT * 1/100);

console.log('Gross price for Shoes: ', grossPriceOfShoes);
console.log('Gross price for TV: ', grossPriceOfTV);
