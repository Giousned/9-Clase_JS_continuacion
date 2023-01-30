// if ... else if ... else

// const sampleData = 80;

// if (sampleData > 50) {
//     console.log('sampleData is over 50!');
// }

// if (sampleData > 50) {
//     console.log('sampleData is over 50!');
// } else {
//     console.log('sampleData is below 50!');
// }

// if (sampleData < 20) {
//     console.log('sampleData is below 20!');
// } else if (sampleData >= 20 && sampleData <= 50) {
//     console.log('sampleData is between 10 and 50!');
// } else {
//     console.log('sampleData is over 50!');
// }


// EJERCICIOS

const oneToHundredArray = Array.from({length: 100}, (_, i) => i + 1)
console.log(oneToHundredArray);

// 1. Crea una función printOdds que reciba los primeros 100 números
// enteros e imprima en la consola los números impares

const printOdds = arrayNumeros => {
    for (let item of arrayNumeros){
        if (item%2 !== 0) console.log(item);
    }
}

printOdds(oneToHundredArray);


// 2. Crea una función detectPairs que reciba los primeros 100 números
// enteros e imprima en la consola 'par' cuando
// reciba un número par e 'impar' cuando reciba un impar

const detectPairs = arrayNumeros => {
    for (let item of arrayNumeros){
        if (item%2 === 0) console.log("par");
         else console.log("impar");
    }
}

detectPairs(oneToHundredArray);

// 3. FizzBuzz: crea una function fizzBuzz que reciba los primeros 100
// números enteros e imprima en la consola:
// - Fizz si es múltiplo de 3
// - Buzz si es múltiplo de 5
// - FizzBuzz si es múltiplo de 3 y de 5
// - El número recibido en otro caso


const fizzBuzz = arrayNumeros => {
    for (let item of arrayNumeros){
        if (item%3 === 0 && item%5 === 0) console.log("FizzBuzz");
            else if (item%3 === 0) console.log("Fizz");
                else if (item%5 === 0) console.log("Buzz");
                    else console.log(item);
    }
}

fizzBuzz(oneToHundredArray);




// switch - break - default

// EJERCICIO

// 1. Repetir el FizzBuzz

// const fizzBuzz2 = arrayNumeros => {

//     for (let item of arrayNumeros){

//         switch (item){
//             case (item%3 === 0 && item%5 === 0):
//             console.log("FizzBuzz");

//             case (item%3 === 0):
//             console.log("Fizz");

//             case (item%5 === 0):
//             console.log("Fizz");

//             default: console.log(item);

//         }
//     }
// }

// fizzBuzz2(oneToHundredArray);



// for - continue

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// EJERCICIOS

// 1. Crea un contador que imprima en pantalla
// los números naturales del 1 al 100

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

for (let i = 1; i < 101; i++) {
    console.log(i);
}

// 2. Crea un contador que imprima en pantalla
// los números naturales impares del 1 al 100

for (let i = 1; i <= 100; i++) {
    if (i%2 !== 0) console.log(i);
}

// 3. Modifica tu anterior contador para que
// imprima los números naturales impares del
// 100 al 1

for (let i = 100; i >= 1; i--) {
    if (i%2 !== 0) console.log(i);
}

for (let i = 100; i > 0; i--) {
    if (i%2 !== 0) console.log(i);
}

// for in

// const sampleObject = { a: 1, b: 2, c: 3 };

// for (const property in sampleObject) {
//   console.log(property);
// }

// EJERCICIO

// 1. Itera sobre oneToHundredArray para imprimir en
// pantalla una cuenta de 2 en 2 desde 2 hasta 200

// 2. Ahora crea un FizzBuzz

// for of

// for (const number of oneToHundredArray) {
//     console.log(number);
// }

// EJERCICIO

// 1. Imprime todas las propiedades y valores de
// sampleObject. Ejemplo: "Propiedad a: valor 1, ..."

// while
// do while

// let currentNumber = 0;

// while (currentNumber < 100) {
//   currentNumber++;
// }

// console.log(currentNumber);

// let currentNumber = 0;

// do {
//     console.log(currentNumber);
//     currentNumber++;
// } while (currentNumber < 0);