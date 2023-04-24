// //task 1
// function pow(a, b) {
//     if (b == 1) {
//         return a;
//     } else {
//         return a * pow(a, b - 1);
//     }
// }
//
// console.log(pow(6, 3));
//
// //task 2
// function doMath(x, znak, y) {
//     if (~znak.search(/[^+\-*/%^]/) || znak.length !== 1) return 'Ошибка';
//     return eval(x + znak.replace('^', '**') + y)
// }
// const x = prompt('Введите x');
// const y = prompt('Введите y');
// const znak = prompt('Введите знак');
// alert(doMath(x, znak, y));

//task 3

//task 4
let str = prompt('Введите любой текст');
let stR = prompt('Какие символы хотите удалить?');
function func(str,stR){
    return str.replace(/[stR]/gi, stR);
}
console.log(func(str,stR));
