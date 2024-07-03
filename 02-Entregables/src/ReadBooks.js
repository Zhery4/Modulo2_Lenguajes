//READ BOOOKS
/*Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. 
Un libro es un objeto con title como string y isRead como booleano. 
En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.*/

export function isBookRead(books, titleToSearch) {
    // Implementation here
    return books.some(book => book.title === titleToSearch && book.isRead);

  }