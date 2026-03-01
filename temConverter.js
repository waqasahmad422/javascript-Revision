
// celsius Convert To Fahrenheit
function celsiusToFahrenheit(c){
    let F = (c * 9/5) + 32;
    console.log(`Fahrenheit is ${F}`)
}
celsiusToFahrenheit(37);


// fahrenheit Convert To Celsius
function fahrenheitToCelsius(f){
    let C = (f-32) * 5/9;
    console.log(`Celsius is ${C}`)
}
fahrenheitToCelsius(98.6);