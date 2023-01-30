// ARRAYS
// Las arrays son listas, donde podemos almacenar cualquier tipo de dato.

// const thisIsAnArray = [
//     1,
//     'perrete',
//     [1, 2, 3, 4, 5],
//     false,
//     {
//         name: 'Zarigüeya',
//         animal: 'cat',
//         age: 2.5
//     }
// ];

// console.log(thisIsAnArray);

// Las arrays tienen una propiedad length, como las strings,
// que nos permite conocer su longitud

// console.log(thisIsAnArray.length);

// Además, podemos acceder a cada uno de sus índices con
// corchetes: RECORDAD! EL PRIMER ÍNDICE SIEMPRE ES 0!

// console.log(thisIsAnArray[0]);
// console.log(thisIsAnArray[2]);
// console.log(thisIsAnArray[thisIsAnArray.length - 1]);

// Podemos utilizar el spread operator para hacer copias
// de una array

// const thisIsAnotherArray = [...thisIsAnArray];

// console.log(thisIsAnotherArray)

// Las arrays son pointers a un lugar de la memoria, un sitio. un link, una direccion

// const arrayExampleOne = [1, 2, 3, 4];           // Sitio1
// const ourSecondExampleArray = arrayExampleOne;  // Sitio1
// const safeCopy = [...arrayExampleOne];          // Sitio2

// arrayExampleOne[0] = "Did you expect this?";    // Sitio1

// console.log(arrayExampleOne);           // Sitio1
// console.log(ourSecondExampleArray);     // Sitio1
// console.log(safeCopy);     // Sitio2

// Para evitar modificar las arrays originales podemos
// hacer copias

// const arrayExampleOne = [1, 2, 3, 4];
// const ourSecondExampleArray = [...arrayExampleOne];

// arrayExampleOne[0] = "Did you expect this?";

// console.log(arrayExampleOne);
// console.log(ourSecondExampleArray);

// Podemos iterar en una array gracias a su método forEach

// const forEachExampleArray = ['one', 'two', 'three'];

// forEachExampleArray.forEach(word => {
//     console.log(word);
// })

// EJERCICIOS

const exercisesArray = ['one', 'two', 'three', 4, 5, 6, [7, 8, 9, 'ten']];

// 1. Imprime en el terminal la longitud de exercisesArray

console.log(exercisesArray.length);

// 2. Imprime en el terminal el primer elemento de exercisesArray

console.log(exercisesArray[0]);

// 3. Imprime en el terminal el elemento 'two' dentro de exercisesArray

console.log(exercisesArray[1]);

// 4. Imprime en el terminal el array almacenado dentro de exercisesArray

console.log(exercisesArray[6]);
console.log(exercisesArray[exercisesArray.length-1]);

// 5. Imprime en el terminal la longitud del array almacenado dentro de exercisesArray

console.log(exercisesArray[6].length);
console.log(exercisesArray[exercisesArray.length-1].length);

// 6. Haz una copia de exercisesArray

const copia = [...exercisesArray];
console.log(copia);

// 7. Cambia el primer índice de exercisesArray por el valor numérico 1

exercisesArray[0] = 1;

// 8. Utiliza la función printOnlyStrings para imprimir en consola
// todas las strings almacenadas en exercisesArray

const printOnlyStrings = input => {
    if (typeof input === 'string') {
        console.log(input);
    }
}

exercisesArray.forEach(printOnlyStrings);
exercisesArray.forEach(e => printOnlyStrings(e));


// MÉTODOS

// 0. Determina si exampleArrayToCheck es un array

const exampleArrayToCheck = { one: 'two' };

console.log(Array.isArray(exampleArrayToCheck));
console.log(typeof []);
console.log(typeof {});


// 1. Une las arrays mergeOne y mergeTwo en una única array

const mergeOne = ['one', 'two', 'three'];
const mergeTwo = [1, 2, 3];

// const unir = mergeOne + mergeTwo;
// console.log(unir);                               // ESTE NO FUNCIONA, TRANSFORMA EN STRING
// console.log(typeof unir);

const unir2 = mergeOne.concat(mergeTwo);
console.log(unir2);

const unir3 = [...mergeOne,...mergeTwo];
console.log(unir3);

// const unir4 = mergeOne.push(mergeTwo);           // ESTE TAMPOCO FUNCIONA, DEVUELVE EL RETURN CON LA LONGITUD DESPUES DE AÑADIR EL ELEMENTO NUEVO.
// console.log(unir4);

// 2. Crea una función isLegalAge para determinar si el parámetro
// proporcionado es mayor que 18

const isLegalAge = edad => {
    if (edad>18) return true;
    else false;
}

const isLegalAge2 = edad => edad > 18;

// 3. Utiliza la función isLegalAge para determinar si todos
// los elementos de la array cumplen la condición.
// NOTA: Queremos obtener un true/false

const ageArray = [19, 38, 92, 84, 28, 71, 39, 44, 29, 91, 45, 32, 19, 63, 32, 33, 45, 18, 47, 54, 19, 46, 75, 51, 23, 34, 81, 108, 72, 26, 28, 24, 41, 51, 52, 75, 41, 51, 64, 81, 26];
console.log(ageArray.every(isLegalAge2));
console.log(ageArray.every(age => isLegalAge2(age)));           // TODOS LOS ELEMENTOS

console.log(ageArray.some(age => isLegalAge2(age)));            // SOLO ALGUN ELEMENTO


// 4. Crea una función isOverFifty para determinar si el parámetro
// proporcionado es mayor que 50

const isOverFifty = num => num > 50;

// 5. Utiliza la función isOverFifty para encontrar las edades
// superiores a 50

console.log(ageArray.filter(e => isOverFifty(e)));




const petsArray = ['dog', 'cat', 'goldfish', 'horse', 'cow', 'goat', 'python', 'parrot', 'ferret',  'hamster', 'pigeon', 'pig', 'rabbit',  'chicken', 'turtle', 'gorilla'];

// 6. ¿Puedes encontrar la palabra 'gorilla' en petsArray?

console.log(petsArray.find(e => e === 'gorilla'));
console.log(petsArray.includes('gorilla'));


// 7. ¿Si existe, puedes encontrar el índice de 'gorilla' en petsArray?

console.log(petsArray.findIndex(e => e === 'gorilla'));
console.log(petsArray.indexOf('gorilla'));

// 8. Si existe, elimina la palabra 'gorilla' de petsArray

const copiaPetsArray = [...petsArray];
const copiaPetsArray2 = [...petsArray];
const copiaPetsArray3 = [...petsArray];



console.log(petsArray.filter(e => e !== 'gorilla'));



delete(copiaPetsArray[petsArray.indexOf('gorilla')]);                   // SE QUEDA EL HUECO VACIO
console.log(copiaPetsArray);



console.log(copiaPetsArray2.splice(0,15));                               // ES EL ULTIMO ELEMENTO



const wordGorillaDelete = copiaPetsArray3.pop();                        // SE PUEDE BORRAR ASÍ PORQUE ES EL ULTIMO O EL PRIMER ELEMENTO (SHIFT), EN ESTE CASO ULTIMO
console.log(wordGorillaDelete);
const petsArrayWithoutGorilla = [...copiaPetsArray3];
console.log(petsArrayWithoutGorilla);


// 9. Imprime en la terminal la nueva lista de mascotas,
// separadas por una coma y un espacio. Ejemplo: "perro, gato, periquito... "

console.log(petsArrayWithoutGorilla.join(", ").toString());

// 10. Vuelve a imprimir la ista, pero ahora en orden inverso

console.log(petsArrayWithoutGorilla.reverse().join(", ").toString());

const copiaPetsArray4 = petsArray.filter(e => e !== 'gorilla');
const reverseOrden = copiaPetsArray4.reverse();                             // REVERSE NO FUNCIONA CON ARRAYS COPIADOS CON EL SPREAD ...

console.log(reverseOrden);


// 11. ¿Alguna de las mascotas tiene más de tres letras?

console.log(petsArray.some(e => e.length>3));                           // ALGUNAS

console.log(petsArray.every(e => e.length>3));                          // TODAS

console.log(petsArray.filter(e => e.length>3));                         // ALGUNAS LO COMPRUEBA Y LAS DEVUELVE, ANTES SOLO TRUE OR FALSE


// 12. Ordena alfabéticamente la lista de mascotas

console.log(petsArray.sort());

// 13. Añade un signo de exclamación al final del
// nombre de cada mascota

console.log(petsArray.toString().split('!'));

console.log(petsArray.join('!'));

const newArr = Array.from(petsArray.join('!'));
console.log(newArr);



// 14. Elimina la última mascota de la lista, guarda su
// nombre en una variable e imprímela en la terminal

const copiaPetsArray5 = [...petsArray];

const wordGorillaDelete2 = copiaPetsArray5.pop();                    // SE PUEDE BORRAR ASÍ PORQUE ES EL ULTIMO O EL PRIMER ELEMENTO (SHIFT), EN ESTE CASO ULTIMO
console.log(wordGorillaDelete2);

// 15. Ahora introduce ese nombre al principio del array

const arrayIntroNombre = [...copiaPetsArray5];
arrayIntroNombre.unshift(wordGorillaDelete2);                        // SE PUEDE INSERTAT ASÍ PORQUE ES EL ULTIMO (PUSH) O EL PRIMER ELEMENTO (UNSHIFT), EN ESTE CASO PRIMER
console.log(arrayIntroNombre);

// 16. Elimínalo de nuevo del principio del array,
// guardándolo en una nueva variable


const wordGorillaDelete3 = arrayIntroNombre.shift();                // SE PUEDE BORRAR ASÍ PORQUE ES EL ULTIMO (POP) O EL PRIMER ELEMENTO (SHIFT), EN ESTE CASO PRIMER
console.log(wordGorillaDelete3);


// 17. Ahora introdúcelo al final del array


const arrayFinNombre = [...copiaPetsArray5];
arrayFinNombre.push(wordGorillaDelete3);                         // SE PUEDE INSERTAR ASÍ PORQUE ES AL FINAL (PUSH) O AL INICIO (UNSHIFT), EN ESTE CASO FINAL
console.log(arrayFinNombre);


// 19. Imprime por pantalla los primeros 5 animales de la lista


for (let i=0; i<5; i++) console.log(petsArray[i]);


let guardar = petsArray.slice(0,5);
console.log(guardar);

petsArray.splice(5)
console.log(petsArray);

console.log(petsArray.slice(0,5));
console.log(petsArray.splice(0,5));


// 20. Completa la lista añadiendo 'Feb' en la segunda posición

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1,0,'Feb');
console.log(months);

