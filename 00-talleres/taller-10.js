const mes = 'enero';
switch( mes ) {
    case 'enero':
    case 'marzo':
    case 'mayo':
    case 'julio':
    case 'agosto':
    case 'octubre':
    case 'diciembre':
        console.log( 'Este mes tiene 31 dias' );
        break;
    case 'noviembre':
    case 'abril':
    case 'junio':
    case 'septiembre':
        console.log( 'Este mes tiene 30 dias' );
        break;
    case 'febrero':
        console.log( 'Este mes tiene 28 dias' );
        break;
    default:
        console.log( 'Este no es mes' );
}

// const mes = 'enero';

// if( mes === 'enero' || mes === 'marzo' || mes === 'mayo' || mes === 'julio' || mes === 'agosto' || mes === 'octubre' || mes === 'diciembre') {
//     console.log( 'Este mes tiene 31 mes' );
// } else if(mes === 'abril' || mes === 'junio' || mes === 'septiembre') {
//     console.log('Este mes tiene 30 dias');
// } else if(mes === 'febrero'){
//     console.log('Este mes tiene 28 dias')
// } else {
//     console.log( 'Este no es mes' );
// }