// Scope
this.car = "Honda Civic with Ugly Spoiler";

var marksGarage = {
    car: "Aston Martin",
    getCar: function() {
        return this.car;
    }
};

// get the marksGarage.GetCar
console.log(marksGarage.getCar());

// store to a variable
var storeGetCarForLater = marksGarage.getCar();
console.log(storeGetCarForLater);

var theRealGetCarFunction = marksGarage.getCar.bind(marksGarage);
console.log(theRealGetCarFunction());

console.log(this.car);
