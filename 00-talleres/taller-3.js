const numero1 = prompt( 'Escribe el primer numero' );
const numero2 = prompt( 'Escribe el segundo numero' );


if( numero1 == numero2 ) {
    alert( numero1 + ' los dos numeros son iguales' + numero2 );
}
else if( numero1 > numero2 ) {
    alert( numero1 + ' es mayor que ' + numero2 );
} 
else {
    alert( numero1 + ' es menor que ' + numero2 );
}