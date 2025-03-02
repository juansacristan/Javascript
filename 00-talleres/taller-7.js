let numero1 = prompt ('¿De 0 a 100 sabes manejar en HTML y CSS?');
numero1 = Number (numero1);
let numero2 = 60;

// if(numero1 >= numero2) {
//     console.log( numero1 + ' estas aprobado a trabajar con nosotros');
// }
// else {
//     console.log( numero1 + ' estas reprobado, gracias por participar sigue intentando');
// }



// (numero1 >= numero2) 
//     ? console.log( numero1 + ' estas aprobado a trabajar con nosotros') 
//     : console.log( numero1 + ' estas reprobado, gracias por participar sigue intentando');

const mensaje = (numero1 >= numero2) 
    ? numero1 + ' estas aprobado a trabajar con nosotros'
    : numero1 + ' estas reprobado, gracias por participar sigue intentando';

console.log( mensaje );