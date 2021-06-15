//Ejercicios Segunda sesión

// let greeting;
// let time = 10

// if (time >= 0 && time < 12) {
// greeting = 'Good Morning!'
// } 
// else if (time >= 12 && time < 20) {
// greeting = "Good Afternoon!"
// }
// else if (time >= 20 && time < 24) {
// greeting = 'Good Evening!'
// } 
// else {
//       greeting = 'Hora Desconocida'
// }

// console.log(greeting) 

// let day = 5;
// let text;

// switch (day) {
//       case 0:
//             text = "Domingo"
//             break;
//       case 1:
//             text = "Lunes"
//             break;
//       case 2:
//            text = "Martes"
//             break;
//       case 3:
//             text = "Miércoles"
//             break;
//       case 4:
//             text = "Jueves"
//             break;
//       case 5:
//             text = "Viernes"
//             break;
//       case 6:
//             text = "Sábado"
//             break;                  
//       default:
//             text = "Error"
//             break;
// }

// console.log(text); 

// let speed = 120;
// let message;

// if (speed > 100) {
//       message = 'Vas muy rápido!'
// } else {
//       message = 'Sigues las reglas de tránsito'
// }

// let message = 0 ? 'Vas muy rápido' : 'Sigues las reglas de tránsito'


// console.log(message)

// for (let i = 0; i <= 9; i++) {
//       console.log("Hello World!")
// }

// let j = 0;
// while (j <= 11) {
//       console.log('while'+ j)numero     j++
// }

// for (let numero = 0; numero <= 100; numero = numero + 2) {
//       console.log(numero)
      
// }



//  for (let contador = 2; contador <= 100; contador++) {
//        let primo = false
//        for (let i = 2; i <= contador; i++) {
//            if (contador % i== 0 && i != contador) {
//                primo = true;
//            }
//        }
//        if (primo == false) {
//                    console.log(contador);
//        }
// }

//Ejercicio sesión 3

// function calcularEdad(birthYear) {
//     let edad = 2021 - birthYear;
//     return edad;
// }

// const edadJuan = calcularEdad(1995)

// const edadPedro = calcularEdad(1964)

// console.log(edadJuan)
// console.log(edadPedro)

// function yearUntilRetirement(year, name) {
//     let age = calcularEdad (year)
//     let retirement = 65 - age
//     return(name + ' retires in ' + retirement + ' years ');
// }

// console.log(yearUntilRetirement(1995, 'Pedro'))

// function power(base, exponent) {
//     let result = 1;
//     for (let counter = 0; counter < exponent; counter++) {
//         result *= base
//     }
//     return result;
// }

// let exponential = power(3,5)

// console.log(exponential);

// function queHacesTu(job, name) {
//     switch (job) {
//         case 'developer':
//             return name + ' desarrolla aplicaciones chidas '
//             break;                 
        
//         case 'designer':
//             return name + ' diseña sitios increíbles '
//             break;
        
//         case 'otro':
//             return name + ' no se está divirtiendo como debe '
//             break;
    
//         default:
//             break;
//     }
// }

// console.log(queHacesTu('developer', 'Pedro'))
// console.log(queHacesTu('designer', 'Gabriela'))
// console.log(queHacesTu('otro', 'Patricia'))

// let factorial = function fac(numero) {
//     return numero < 2 ? 1 : numero * fac(numero - 1);
// }

// console.log(factorial(6))

// (function nombre () {
//     let name = 'Juan'
//     console.log(name)
// })()

// function numeroMayor (a, b) {
//     if (a>b) {
//         return a;
//     } else if (b>a) {
//         return b;
//     } else {
//         return 'Los Numeros son iguales'
//     }
// }

// console.log(numeroMayor(6,3))

function fibonacci(numero) {
    if (numero <= 1) return 1;
  
    return fibonacci(numero - 1) + fibonacci(numero - 2);
  }
  
  function fibonacciSequence(limit) {
    if(limit < 1) return console.log('Limite debe ser mayor que 0');
  
    for(let i = 0; i < limit; i++ ) {
      console.log( fibonacci(i) );
    }
  }

  fibonacciSequence(11);