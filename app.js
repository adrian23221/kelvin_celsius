//kelvin var
const kelvin = 0;
//celsius var
const celsius = kelvin - 273;
//farenheit
let fahrenheit = celsius * (9 / 5) + 32;
//newton
let newton = celsius * (33 / 100);
//convert fahrenheit
newton = Math.floor(newton);
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);
