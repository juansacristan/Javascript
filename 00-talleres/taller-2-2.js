const nombre = prompt ('¿cual es tu primer nombre?');
const añoNacimiento = prompt ('¿En que año naciste?');

function edad(añoNacimiento) {
    const añoAhora = 2025;
    const edad = añoAhora - añoNacimiento;
  
  console.log( 'Hola ' + nombre + ' dejame adivinar tienes ' + edad + ' años' );
}

edad(añoNacimiento);