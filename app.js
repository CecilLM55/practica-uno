//El comando REQUIRE inyecta la dependencia.
let grados = require('celsius-fahrenheit-converter');

console.log('Celsius a Fahrenheit:', grados.celsiusToFahrenheit(19));
console.log('Fahrenheit a Celsius: ', grados.fahrenheitToCelcius(66.2));
