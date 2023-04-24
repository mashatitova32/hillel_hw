// //task 1
let arr = ['Banana', 4, 10, 'Strawberry', 2, 4];
let arrNum = [];
let sum = 0;
function num(){
    arrNum += arr.filter(function(number) {
        return !isNaN(Number(number));
    });
    console.log(arrNum);
    for(let i = 0; i < arrNum.length; i++) {
        sum += arrNum[i];
    }
    return sum / arrNum.length;

}
num();
console.log(sum);
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
