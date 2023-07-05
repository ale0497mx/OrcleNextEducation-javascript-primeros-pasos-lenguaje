const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
const precioCiudad = new Array(500, 400, 380, 200);
const presupuestoDiosponible = 190;
let i =0;
// while... 0 o mas veces
// do while... 1 o mas veces
while(precioCiudad[i] > presupuestoDiosponible && i < ciudadesDisponibles.length){
    i++;
}
if (i == ciudadesDisponibles.length) {
    console.log("No pasajes disponibles")
}else{
    console.log(`Puedes comprar psaje para: ${ciudadesDisponibles[i]}`);
}
    