let numero = prompt ('Digite tu número');
numero = Number (numero);

if (numero % 3 === 0){
    console.log('bing');
} else if (numero % 5 === 0){
    console.log('bong');
} else if (numero % 3 === 0 && numero % 5 === 0){
    console.log('bingbong');
} else{
    console.log('no se cumple ninguno');
}