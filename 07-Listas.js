const ciudadesDisponibles = new  Array("bogota", "Lima", "Santiago") ;
console.log(ciudadesDisponibles);

const paisesDisponibles= ["Colombia","Peru","Chile","Brasil","Argentina"];
console.log(paisesDisponibles);

{
    paisesDisponibles.push('Uruguay');
    ciudadesDisponibles.push('Montevideo');
    console.log(paisesDisponibles);
    console.log(ciudadesDisponibles);

    paisesDisponibles.unshift('Ecuador');
    ciudadesDisponibles.unshift('Quito');
    console.log(paisesDisponibles);
    console.log(ciudadesDisponibles);

    paisesDisponibles.splice(0,2, 'Venezuela', 'Paraguay');
    console.log(paisesDisponibles);

}

