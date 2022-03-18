//Cree un algoritmo que permita dterminar
//La calificacion de un alumno
//si la nota se encuentra entre 100 a 90 = A
//si la nota se encuentra entre 80 a 89 = B
//si la nota se encuentra entre 70 a 79 = C
//si la nota se encuentra entre 60 a 69 = D
//si la nota es inferior a 60 = F
 
let nota = -6;
let notaLetra = '';

// if(nota <= 100 && nota >= 90){ 
//     (notaLetra = 'A');
// } else if(nota >= 80 && nota <= 89){
//     (notaLetra = 'B');
// } else if(nota >= 70 && nota <= 79){
//     notaLetra = 'C';
// } else if(nota >= 60 && nota <= 69){
//     notaLetra = 'D';
// } else{
//     notaLetra = 'F';
// }
// console.log(nota + ' es igual a ' + notaLetra);


if(nota >= 90){
    notaLetra = 'A';
} else if(nota >= 80){
    notaLetra = 'B';
} else if( nota >= 70){
    notaLetra = 'C';
} else {
    nota >= 60;
    notaLetra = 'D';
}
    
   

console.log(nota + ' es igual a ' + notaLetra);

