//CLONE
//Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

export function clone(source) {
    return { ...source };
}

//Merge
//Implementa una función merge que, dados dos objetos de entrada source y target, 
//devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.
export function merge(source, target){
    return {...target, ...source};
}
