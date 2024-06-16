

//Ejercicio 1
//HEAD
//Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
export const head = (arr) => {
    const [first] = arr;
    return first;
}

//TAIL
//Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
export const tail = (arr) => {
    const [, ...rest] = arr;
    return rest;
};

//INIT
//Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
export const init = (arr) => {
    const initList = arr.slice(0, arr.length - 1);
    return initList;
};

//LAST
//Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
export const last = (arr) => {
    const last = arr.at(-1);
    return last;
};