const paisesDisponibles= ["Colombia","Peru","Chile","Brasil","Argentina", "Uruguay", "Venezuela"];

const ciudadesDisponibles = new  Array("bogota", "Lima", "Santiago", "Montevideo");
let cantidadCiudades = ciudadesDisponibles.length;
let cantidadPaises = paisesDisponibles.length;

console.log(`En la lista de ciudades tenemos ${cantidadCiudades} ciudades <br>
En la lista de paises tenemos ${cantidadPaises} paises`);

const paisesFiltrados = paisesDisponibles.filter((e)=> e == 'Brasil');
console.log(paisesFiltrados);
// Junatar todos elementos de la lista con un join y convertirlo en caracteres
console.log(paisesDisponibles.join(', '));
// sort() ordena yuna lisat de manera acendente en el abcdario 
console.log(paisesDisponibles.sort());

//sabver la posicion de un arreglo 
console.log(`Peru esta en la posicion: ${paisesDisponibles.indexOf('Peru')}`)
// Unificar lista 
const todoJunto = paisesDisponibles.concat(ciudadesDisponibles);
console.log(todoJunto);