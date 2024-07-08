import { head, tail, init, last, concat, concatOptional, clone, merge, isBookRead } from './src';
import { SlotMachine } from './src/utils/SlotMachine';

//Variables
const arr = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
//Ejercicio 1

//HEAD
//Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
const element = head(arr); // [1, 2, 3, 4, 5]
console.log(`Ejercicio 1 HEAD:  Lista -> ${arr} // head -> ${element}`);

//TAIL
const tailList = tail(arr); // [2, 3, 4, 5]
console.log(`Ejercicio 1 TAIL:  Lista -> ${arr} // tail -> ${tailList}`);

//INIT
const initList = init(arr); // [1, 2, 3, 4]
console.log(`Ejercicio 1 INIT:  Lista -> ${arr} // init -> ${initList}`);

const lastElement = last(arr); // 5
console.log(`Ejercicio 1 LAST:  Lista -> ${arr} // last -> ${lastElement}`);

//Ejercicio 2
//CONCAT
const concatArrs = concat(arr, arr2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(`Ejercicio 2 CONCAT: params -> ${arr} ${arr2} Final -> ${concatArrs}`);

// OPCIONAL

const concatArrOpcional = concatOptional(arr, arr2, [11,12,13]);
console.log(`Ejercicio 2 CONCAT OPCIONAL 1: params -> ${arr} ${arr2} ${[11,12,13]} Final -> ${concatArrOpcional}`);


const concatArrOpcional2 =concatOptional(arr, arr2, [11,12,13], [14,15,16]);
console.log(`Ejercicio 2 CONCAT OPCIONAL 2: params -> ${arr} ${arr2} ${[11,12,13]} ${[14,15,16]} Final -> ${concatArrOpcional2}`);

//EJERCICIO 3

//Clone
const sourceElement = {name: "Alex", age: 25, LastName: "Ramirez"};
const cloneElement = clone(sourceElement);


console.log(`Ejercicio 3 CLONE: source -> ${JSON.stringify(sourceElement)} clone -> ${JSON.stringify(cloneElement)}`);
cloneElement.name = "Juan";
console.log(`Ejercicio 3 CLONE: source -> ${JSON.stringify(sourceElement)} clone -> ${JSON.stringify(cloneElement)}`);

//Merge

const a = {name: "Alex", age: 25, LastName: "Ramirez"};
const b = {name: "Juan", age: 30, LastName: "Perez", city: "Madrid"};

const mergeElement = merge(a, b);
console.log(`Ejercicio 3 MERGE: source -> ${JSON.stringify(a)} target -> ${JSON.stringify(b)} merge -> ${JSON.stringify(mergeElement)}`);

//EJERCICIO 4
const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

const bookRead = isBookRead(books, "Devastación"); // true
console.log(`Ejercicio 4 READ BOOKS: ${bookRead} -> ${isBookRead(books, "Devastación")}`);
console.log(`Ejercicio 4 READ BOOKS: ${bookRead} -> ${isBookRead(books, "Canción de hielo y fuego")}`);
console.log(`Ejercicio 4 READ BOOKS: ${bookRead} -> ${isBookRead(books, "Los Pilares de la Tierra")}`);


//EJERCICIO 5

const machine1 = new SlotMachine();


machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();



