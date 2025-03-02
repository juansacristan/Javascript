const password = '123456789';

const nombre = prompt( 'Digite su nombre' );
const contrasena = prompt( 'Digite su contraseña' );

if( contrasena === password ) {
    alert( 'Bienvenido ' + nombre );
}
else {
    alert( 'Acceso denegado' );
}