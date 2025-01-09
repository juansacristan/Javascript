// En los lenguajes tradicionales
//      Tipos Primitivos:
//          - Cadenas (strings),
//          - Falso/verdadero (Booleans),
//          - Enteros (Integer/int),
//          - Punto decimal (Float)
//          - Punto decimal de doble precision (Double)
//      Tipos Complejos
//        Estructuras de datos
//              - Object (Objetos)
//              - Array (vectores)
//              - List (Listas)


// En JavaScript
//      Tipos Primitivos:
//          - Cadenas (strings),
                let name ='Juan';
//          - Falso/verdadero (Booleans),
                let esHombre = true;
//          - Numeros (Numbers),
                let age = 31;
                let height = 1.69;
//          - null (Nulo)
                let nullValue = null;
//          - undefined (Indefinido),
                let underfinedValue = NaN;
//          -Nan (Not is a Number),
                let otherValue = NaN;
//      Tipos Complejos
//        Estructuras de datos
//              - Object (Objetos)
//              - Arrays o Lists (Uno no se parece al otro)'Object'
            let fruits = ['naranja', 'manzana', 'banana', 'pera'];
            // Indices   0    1    2    3   ...
            let ticTacToe[
                [X, 0, X],
                [X, X, 0],
                [0, 0, X]
            ];

            console.log( ticTacToe[1]);
            console.log( ticTacToe[1][1]);

//              - Objects 'objeto'
                    let persona = {
                        name: 'Juan',
                        age: 31,
                        hobbies: ['Codding', 'Videogames']
                    }

                    /** Sintaxix Punto **/
                    console.log(persona.name); //Juan
                    console.log(persona.hobbies[1]); //Videogames

                    /** Sintaxis Array/Lista **/
                    console.log(persona['name']); //Juan
                    console.log(persona['hobbies'][1]); //Videogames

/** Otras combinaciones **/
let people = [
    {name: 'Mady', age: 30, hobbies: ['Futbol', 'Videogames', 'Anime']},
    {name: 'Duvan', age: 15, hobbies: ['Montar bicicleta', 'Videogames']},
];

/** Obtener la edad de Mady **/
console.log(people[0].age);  //30