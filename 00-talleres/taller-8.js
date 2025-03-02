let calificacion = prompt ('¿De 0 a 100 sabes en javascript?');
calificacion = Number (calificacion);
const nota = 100;
 
// if(calificacion >= nota) {
//     console.log(' tu calificacion es ' + calificacion + ' excelente');

// }
// else if(calificacion < 80 ){
//     console.log(' tu calificacion es ' + calificacion + ' bueno');
// }
// else if(calificacion < 71 ){
//     console.log(' tu calificacion es ' + calificacion + ' regular');
// }
// else if(calificacion < 70 ){
//     console.log(' tu calificacion es ' + calificacion + ' insuficiente');
// }

if(calificacion>=90 && calificacion<=100) {
    console.log(' tu calificacion es ' + calificacion + ' excelente');
}
else if(calificacion>=80 && calificacion<=89) {
    console.log(' tu calificacion es ' + calificacion + ' bueno');
}
else if(calificacion>=70 && calificacion<=79) {
    console.log(' tu calificacion es ' + calificacion + ' regular');
}
else {
    console.log(' tu calificacion es ' + calificacion + ' insuficiente')
}