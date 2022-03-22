
// let dia = 10; // 1 = Lunes, 2 = Martes.....
//              // 0 es el Domingo

// switch ( dia ) {
//     case 0:
//         console.log('Es domingo');
//         break;
//     case 1:
//         console.log('Es lunes');
//         break;
//     case 2:
//         console.log('Es martes');
//         break;
//     case 3:
//         console.log('Es miércoles');
//         break;
//     case 4:
//         console.log('Es jueves');
//     case 5:
//         console.log('Es viernes')
//         break;
//     case 6:
//         console.log('Es sábado');
//         break;
//     default:
//         console.log('El día ingresado no es permitido');
// } 

let dia = 2; // Lunes = 0, Martes = 1
             // Domingo = 0

if( dia === 0){
    console.log(dia + ' Es domingo');
} else if( dia === 1){
    console.log(dia + ' Es lunes');
} else if( dia === 2){
    console.log(dia + ' Es martes');
} else if( dia === 3){
    console.log(dia + ' Es miercoles');
} else if( dia === 4){
    console.log(dia + ' Es jueves');
} else if( dia === 5){
    console.log(dia + ' Es viernes');
} else{ dia === 6
    console.log(dia + ' Es sabado');
}