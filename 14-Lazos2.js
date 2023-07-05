const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
const precioCiudad = new Array(500, 400, 380, 200);
const datos = [
    {
        'ciudad' : 'Bogotá',
        'precio' : 500
    },
    {
        'ciudad' : 'Lima',
        'precio' : 400
    },
    {
        'ciudad' : 'Santiago',
        'precio' : 380
    },
    {
        'ciudad' : 'Montevideo',
        'precio' : 200
    },
]
const presupuestoDiosponible = 400;
let i =0;
// while... 0 o mas veces
// do while... 1 o mas veces
// while(i < datos.length && datos[i].precio > presupuestoDiosponible ){
//     i++;
// }
let ciudadSeleccionada = '';
do{
    if(datos[i].precio < presupuestoDiosponible ){
    ciudadSeleccionada = datos[i].ciudad; 
}
i++;
}while(i < datos.length && ciudadSeleccionada == '')
if (ciudadesDisponibles == '') {
    console.log("No pasajes disponibles")
}else{
    console.log(`Puedes comprar pasaje para: ${ciudadSeleccionada}`);
}
    