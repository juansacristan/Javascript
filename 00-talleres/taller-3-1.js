const numeros = [1, 2, 3, 4, 5, 6]
//const notas = [ 4.5, 3.2, 2 ];


function sumarElementos( lista ) {
    let totalSuma = 0;
    let numerosListas = lista.length;

    for( let i = 0; i < numerosListas; i ++) {
        totalSuma = totalSuma + lista[ i ]; 
    }

    return totalSuma;
}

let resultado = sumarElementos(numeros);
console.log( resultado );
//resultado = sumarElementos( notas );
//console.log( resultado );

var numeroSeis = 0
for( let i = 0; i < numeros.length; i = i + 1 ) {
    if (numeros[i] == 6) {
        numeroSeis = numeroSeis + 1
    }
}
console.log(numeroSeis);
