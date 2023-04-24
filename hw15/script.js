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
