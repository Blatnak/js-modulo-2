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

// function fibonacci(numero) {
//     if (numero <= 1) return 1;
  
//     return fibonacci(numero - 1) + fibonacci(numero - 2);
//   }
  
//   function fibonacciSequence(limit) {
//     if(limit < 1) return console.log('Limite debe ser mayor que 0');
  
//     for(let i = 0; i < limit; i++ ) {
//       console.log( fibonacci(i) );
//     }
//   }
//   fibonacciSequence(11);

//Ejercicios Sesión 4 Arreglos y Objetos

// let numeros = [1, 3, 4, 7, 2, 1, 9, 0] //Arreglo inicial

// function multiplicarPorDos(nums) {
//   let numerosMultiplicados = [];

//   for(let i = 0; i < nums.lenght; i++ ) {
//     numerosMultiplicados.push(nums[i] * 2)
//     console.log(numerosMultiplicados)
//   }

//   return numerosMultiplicados;
// }

// console.log(numeros)

// console.log(multiplicarPorDos(numeros))

// function promedio(nums) {
//   let suma = 0;

//   for (let i = 0; i < nums.length; i++){
//     suma += nums[i]
//   }

//   return suma / nums.length
// }

// console.log(promedio(numeros))

// let car = {
//   brand: 'Nissan',
//   model: 'Versa',
//   year: 2020
// }

// function keyValuePairs (informacionAuto) {
//   let keys = Object.keys(informacionAuto)
//   let pairs = [] //Aquí se arma la información de resultado

//   for(let i = 0; i < keys.length; i++) {
//     pairs.push([keys[i], informacionAuto[keys [i]]])
//   }

//   return pairs;
// }

// console.log(keyValuePairs(car));

// function arrayToObject(arr) {

//   let objeto = {};

//   for(let i = 0; i < arr.length; i++) {
//     objeto[arr[i][0]] = arr[i][1]
//   }

//   return objeto;
// }

// console.log(arrayToObject(keyValuePairs(car)))


// let juan = {
//   firstName: 'Juan',
//   lastName: 'Perez',
//   birthYear: 1990,
//   calculateAge: function() {
//     let today = new Date();
//     let year = today.getFullYear();

//     this.age = year - this.birthYear
//   }
// }

// let singers = [
//   { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
//   { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
//   { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
//   { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
// ];
// function pluck(list, propertyName) {
//   let datos = []

//   for(let i = 0; i < list.length; i++) {
//     datos.push(list[i][propertyName])
//   }

//   return datos
// }
// console.log( pluck(singers, 'name') );
// // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]
// console.log( pluck(singers, 'band') );
// // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]
// console.log( pluck(singers, 'born') );
// // [1948, 1950, 1967, 1964]

// let singersGenero = [
//   { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
//   { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
//   { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
//   { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
//   'rock'
// ];

// function agregaGenero(list) {
//   let genero = []

//   for(i = 0; i < list.length - 1; i++) {
//     list[i].genero = list[list.length - 1]  
//     genero.push(list[i])
//   }
//   return genero;
// }

// console.log(agregaGenero(singersGenero))

//Ejercicios Lección 6

// let juan = {
//   name: 'Juan',
//   birthYear: 1990,
//   job: 'Developer'
// }

// let juan = {
//   name: 'Pedro',
//   birthYear: 1985,
//   job: 'Developer'
// }

// let juan = {
//   name: 'Daniel',
//   birthYear: 1995,
//   job: 'Developer'
// }

// let Persona = function (name, bithYear, job) {
//   this.name = name;
//   this.bithYear = bithYear;
//   this.job = job;
// }

// let juan = new Persona('Juan', 1990, 'Developer')
// let pedro = new Persona('Pedro', 1985, 'Contador')
// let daniel = new Persona('Daniel', 1985, 'Maestro')

// console.log(juan, pedro, daniel)

// let Vector = function (x, y) {
//   this.x = x;
//   this.y = y;
// }

// Vector.prototype.plus = function(otroVector) {
//   console.log(this)
//   return new Vector(this.x + otroVector.x, this.y + otroVector.y)
// }

// Vector.prototype.minus = function(otroVector) {
//   return new Vector(this.x - otroVector.x, this.y - otroVector.y)
// }

// Vector.prototype.length = function() {
//   return Math.sqrt(this.x * this.x + this.y * this.y)
// }

// let vec1 = new Vector(1,2);
// let vec2 = new Vector(2,3);

// console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
// console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
// console.log(vec1.length()); // 2.23606797749979

// let Persona = function (name, bithYear, job) {
//   this.name = name;
// }

// let Developer = function(name, skills, yearsOfExperience) {
//   Persona.call(this, name)

//   this.skills = skills;
//   this.yearsOfExperience = yearsOfExperience;
// }

// let juan = new Developer('Juan', 'Javascript', 10);
// let pedro = new Persona ('Pedro')

// console.log(juan)
// console.log(pedro)

// let Group = function() {
//   this.members = []
// }

// Group.prototype.has = function(valor) {
//   return this.members.includes(valor);
// }

// Group.prototype.add = function(valor) {
//   if (!this.has(valor)) {
//     this.members.push(valor);
//   }
// }

// Group.from = function(arreglo) {
//   let grupo = new Group();

//   for (let i = 0; i < arreglo.length; i++) {
//     grupo.add(arreglo[i]);
//   }

//   return grupo;
// }

// let group = Group.from([1, 2, 3, 4, 5]);
// console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
// console.log(group.has(5)); // true
// console.log(group.has(10)); // false
// group.add(12);
// console.log(group.has(10)); // true

// let Persona = function(name, birthYear, job) {
//   this.name = name;
//   this.birthYear = birthYear;
//   this.job = job;
// }

// Persona.prototype.calculateAge = function() {
//   let today = new Date();
//   let year = today.getFullYear();

//   console.log(year - this.birthYear)
// }

// let juan = new Persona('Juan', 1990, 'Developer')
// let pedro = new Persona('Pedro', 1985, 'Contador')
// let daniel = new Persona('Daniel', 1960, 'Maestro')

let Triangle = function(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
}


let triangle = new Triangle(1, 2, 3);
console.log(triangle); // Triangle { a: 1, b: 2, c: 3 }
console.log(triangle.getPerimeter()); // 6