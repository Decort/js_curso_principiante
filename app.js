
//Crear un algoritmo, que basado en la nota
// imprima si el alumno aprueba la materia
// aprueba 60
// si el alumno tiene nota menor a 50 imprimir
//un mensaje que diga: por favor estudie mas

let nota = 50;

if ( nota >= 60 ) {
    console.log('EL alumno aprueba la clase');
} else {

    if ( nota < 50) {
        console.log('por favor estudie más')
    }
    console.log('El alumno no aprueba la clase');
}