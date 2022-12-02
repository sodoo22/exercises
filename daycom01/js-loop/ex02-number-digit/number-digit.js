// let a = Number(prompt("Ta hussen toogoo oruulna uu"));
// let i = 0;
// console.log('Oruulsan too: = ' + a)

// if (Number.isInteger(a)) {
//     while(a!==0){

//         a = Math.floor(a/10);
//         i  = i + 1;

//     }
//     console.log('digit: = ' + i);
// } else { 
//     alert('Too oruulna uu');
//     console.error('Too oruulna uu');
// }



// 12345 -> 54321 n хувьсагчийн утгыг тоог урвуул.


// let n = prompt("Ta hussen toogoo oruulna uu");
// let i = n.length;

// let flipNumber = '';

// console.log(i);

// while (0 < i) {
//     flipNumber = flipNumber + n.charAt(i - 1);
//     i--;
// }
// console.log(flipNumber);




//Заавар: n! - n факториал гэж уншина. Энэ нь 1,2,3,…,n тоонуудын үржвэр байна

// n!=1⋅2⋅3⋅⋯⋅n

// 5! = 120 / 1*2*3*4*5/

let n = prompt("Ta hussen toogoo oruulna uu");
let i = n.length;
let sum = 1; // urjih uyd zaaval 1 gesen utgatai ehlene.

while (0 < i) {
    sum = sum * n.charAt(i - 1);
    i--;
}

alert('факториал тоо = ' + sum);
console.log('факториал тоо = ' + sum);
