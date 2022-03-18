
//Crear un algoritmo, que basado en la nota
// imprima si el alumno aprueba la materia
// aprueba 60
// si el alumno tiene nota menor a 50 imprimir
//un mensaje que diga: por favor estudie mas

let notaObtenida = 50;

if ( notaObtenida >= 60 ) {
    console.log('EL alumno aprueba la materia');
} else {

    if ( notaObtenida < 50) {
        console.log('por favor estudie un poco más')
    }
    console.log('El alumno no aprueba la materia');
}