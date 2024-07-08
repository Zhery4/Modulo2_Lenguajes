//Ejercicio 2 CONCAT
//Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

export const concat = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

//Opcional
//Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada (más de 2). No utilices el método
export function concatOptional () {
    let finalArray = [];
    for (const iterator of arguments) {
        if (Array.isArray(iterator)) {
            finalArray = [...finalArray, ...iterator];
        }
    }    
    return finalArray;
}