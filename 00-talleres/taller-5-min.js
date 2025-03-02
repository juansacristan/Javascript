/*const nombres = [ 'Juan Sacristán', 'Juan Cano', 'Juan Diego', 'Mady', 'Matias', 'Juan Pablo','Yalef'];

for(let i = 0; i < nombres.length; i = i + 1) {
    console.log( nombres[i] );
}

nombres.push ('Juan Carlos', 'David');
console.log(nombres);

for(const nombre of nombres){
    console.log(nombre.length, nombre);
}


const numeros = [2, 5, 9, 11, -8, -4];
console.log(numeros.includes [2]); */

const corral = ['gallina', 'oveja', 'burro', 'oveja', 'oveja', 'perro' ];
// console.log(corral.includes('pastor'));
if (corral.includes('pastor')){
    // console.log('El pastor esta en el corral')
} else{
    // console.log('El pastor NO esta en el corral')
}

var contadorOvejas = 0
for( let i = 0; i < corral.length; i = i + 1 ) {
    // console.log( corral[i] );
    if (corral[i] == 'oveja') {
        contadorOvejas = contadorOvejas + 1
    }
}
console.log(contadorOvejas);