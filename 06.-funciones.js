// FUNCIONES
// Las funciones son bloques de código reutilizable.
// Como las variables, lo primero que hacemos es declararlas,
// para almacenarlas en la memoria. Luego podemos ejecutarlas

// const word = 'Hello';


// function exampleFunction(firstWord, secondWord) {
//     console.log(firstWord + ' ' + secondWord);
// }

// exampleFunction('hello', 'world');


// const addTwo = number => {
//     return number + 2;
// };





// const addTwoNumbers = (firstNumber, secondNumber) => {
//     const result = firstNumber + secondNumber;
//     return result;
// };




// console.log(addTwoNumbers(2, 5));

// exampleFunction();

// A nuestras funciones les podemos pasar argumentos. Se trata de
// variables que utilizaremos dentro de la propia función

// const helloWorld = 'Hello, world!';

// function exampleFunction(printStatement) {
//     console.log(printStatement);
// }

// exampleFunction(helloWorld);


// EJERCICIOS

// 1. Escribe una función que imprima la suma de dos números
// proporcionados como parámetros

// 2. Escribe una función que imprima un número aleatorio, de 1
// hasta el rango proporcionado

// ---

// Las funciones pueden utilizar la keyword return, que:
// 1. Les asigna un valor de retorno
// 2. Interrumpe la ejecución del código

// function addTwoNumbers(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// }

// const addResult = addTwoNumbers(1, 3);

// console.log(addResult);

// EJERCICIO

// 1. Retomando la función que genera números aleatorios, haz que retorne
// el resultado, no que lo imprima en consola

// IMPORTANTE
// 1. Debemos tratar de que nuestras funciones solo cumplan un cometido
// 2. Debemos tratar de escribir funciones puras (siempre devuelven el mismo
// resultado con los mismos parámetros)
// 3. Debemos evitar los efectos secundarios en nuestras funciones
// 4. Debemos tener mucho cuidado con el nombre de nuestras funciones


const print = (word) => console.log(word);


// Podemos utilizar funciones sin nombre. Las llamaremos funciones anónimas.

// const exampleFunction = function () {
//     console.log('Anonymous function!');
// }
 
// exampleFunction();

// Existe una sintaxis especial desde EC6: las arrow functions

// const exampleFunction = () => {
//     console.log('Anonymous function!');
// }
 
// exampleFunction();

// EJERCICIOS

// 1. Escribe una arrow function que imprima en la consola el parámetro
// que le proporciones

const imprimir = parametro => console.log(parametro);
imprimir('Hello');

// 2. Escribe una arrow function que sume dos números proporcionados

const suma = (num1,num2) => result = num1 + num2;
console.log(suma(10,54));

// 3. Escribe una arrow function que imprima en la consola la multiplicación
// de dos números proporcionados

const multiplicacion2 = (num1,num2) => console.log(result = num1 * num2);
multiplicacion2(125,89);

const multiply = (num1,num2) => {
    resultado = num1 * num2;
    imprimir(resultado);
    return resultado;
}

imprimir(multiply(5,4));

// 4. Escribe una arrow function que reste dos números proporcionados

const resta = (num1,num2) => result = num1 - num2;
console.log(resta(65,24));

// 5. Escribe una arrow function que multiplique dos números proporcionados

const multiplicacion = (num1,num2) => result = num1 * num2;
console.log(multiplicacion(125,204));

// 6. Escribe una arrow function que divida dos números proporcionados

const division = (num1,num2) => result = num1 / num2;
console.log(division(457,34));

// 7. Escribe una arrow function que reciba dos números y una operación,
// ejecute la operación e imprima el resultado en pantalla

const calcular = (num1,num2,operacion) => result = operacion(num1,num2);

const calcular2 = (num1,num2,operacion) => {
    resultado = operacion(num1,num2);
    return resultado;
}

console.log(calcular(10,100,suma));
imprimir(calcular(200,100,suma));

imprimir(calcular2(50,100,resta));

imprimir(calcular2(50,100,multiplicacion));

imprimir(calcular2(50,100,division));
