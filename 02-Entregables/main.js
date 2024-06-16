import { head, tail, init, last } from "./src/ArrayOperations"
import { concat, concatOptional } from "./src/Concat";


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
