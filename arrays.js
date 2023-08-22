// var listaDeCompras = [];
// listaDeCompras[3] = "Tomates";
// listaDeCompras[1] = "Lechuga";

// console.log(listaDeCompras.length);
// listaDeCompras[1];
// var elementoDelArray = listaDeCompras[1];
// console.log(elementoDelArray);

// var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
// console.log(nombres);

// Metodos de Insercion = PUSH, UNSHIFT, POP y SHIFT
// var colores = ['amarillo', 'azul'];
// colores.push('rojo'); // metodo para agregar al final
// colores.unshift('verde'); // para agregar al principio
// colores.pop(); // para eliminar elemento final
// colores.shift(); // para eliminar elemento del principio
// console.log(colores);

// Metodo INCLUDES
// var pintores = ['Picasso', 'Velazquez', 'Van Gogh', 'Dali'];
// var incluyeDali = pintores.includes('Monet');
// console.log(incluyeDali);

// Metodo EVERY
// var numeros = [10, 6, 8, 9];
// var cumplenCondicion = numeros.every((num) => {
//     return num > 5;
// });
// console.log(cumplenCondicion);

// Metodos SPLIT Y JOIN (Separar y Unir)
// var palabra = 'Henri';
// var palabraSeparada = palabra.split('');
// palabraSeparada.pop();
// palabraSeparada.push('y');
// console.log(palabraSeparada);
// var palabraArreglada = palabraSeparada.join('');
// console.log(palabraArreglada);

// Metodo forEach
// var numeros = [1, 2, 3, 4];
// numeros.forEach((num) => console.log(num));
// numeros.forEach(num => {
//     if(num === 3) {
//         console.log(num)
//     }
// });

// Otro ejemplo
// var autos = ["Ford", "Chevrolet", "Toyota", "Tesla"];
// autos.forEach(function(auto, indice){
//     console.log(auto,indice)
// })
// este metodo recibe e itera cada elemento y a cada uno le aplica la funcion

// Metodo MAP (Crea copia de arreglo original y puede realizar cambios)
// Nos entrega un nuevo array y va a iterar en cada elemento y va a aplicar lalogica que nosotros
// le demos en la funcion
// var masUno = numeros.map((num) => {
//     return num + 1;
// });
// console.log(masUno);

// var num = [2,3,4,5];
// function multiplicarPorTres(elemento){
//     return elemento *3;
// }
// var producto = num.map(multiplicarPorTres);
// Esto en la consola da como resultado [6, 9, 12, 15]

// var num = [2,3,4,5];
// var producto = num.map(function(elemento){
//     return elemento * 3
// })
// console.log(producto);
// en la consola dio = [ 6, 9, 12, 15 ]
// IMPORTANTE si no se aplica el console.log no te da el producto en la consola


// Bucle FOR
// var arr = [1, 2, 3, 4, 5];

// for(var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// function encontrarLetraP(string) {
//     var letras = string.split('');

//     for(let i = 0; i < letras.length; i++) {
//         if (letras[i] === 'p') {
//             console.log('Si contiene a P');
//         }
//     }
// }

// encontrarLetraP('JavaScript');
// encontrarLetraP('Henry');

// Bucle WHILE
// var arr = [];

// while (arr.length < 5) {
//     arr.push('BOOM');
// }

// console.log(arr);

// Metodo LENGTH
// var comidas = ['pizza', 'hamburguesa', 'hot dog', 'lasagna'];
// console.log(comidas.length);

// Metodo REDUCE
// aplica una funcion reductora a cada elemento y nos entrega u nuevo valor
// var palabras = ["Hola", "mi", "nombre", "es", "Jodannys"];
// var frase = palabras.reduce(function(acumulador, elemento){
//     return acumulador + ' ' + elemento
// }, "Buenas tardes, saludo: ");
// 
// console.log(frase);
// la consola me tira = Buenas tardes, saludo:  Hola mi nombre es Jodannys
// elemento = Hola
// acumulador = "Buenas tardes, saludo: "
// en resumen acumulador se va cargando, va iterando y sumando elementos en cada iteracion
// mejor dicho concatenando, primero suma hola, despues dice hola mi, luego hola mi nombre y asi
// sucesivamente.

// En el sig ejemplo quiero que me sume los numeros y me entregue un nuevo resultado
// Recuerda que el 1er argumentos es la function y el 2do el acumulador
// var numeros =  [1,2,3,4,5]; 

// var suma = numeros.reduce(function(acumulador, elemento){
//     return acumulador + elemento
// },0)

// console.log(suma);
// la consola arroja el resultado que es = 15

// function multiplicar(a,b){
//     return a * b;
// }
//  var producto = numeros.reduce(multiplicar)
//  console.log(producto)
// la consola arroja el result = 120


// Metodo ARGUMENTS