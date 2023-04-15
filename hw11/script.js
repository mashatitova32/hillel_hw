let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// 1
let counter = 0;
let sum = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] >= 0){
       counter++;
       sum += arr[i];
       console.log(arr[i]);
    }
}
console.log(counter, sum);

//2
console.log("Min:", Math.min.apply(null, arr),arr.indexOf(-63));

//3
console.log("Max:", Math.max.apply(null, arr),arr.indexOf(76));

//4
let counterNegative = 0;
for(let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
        counterNegative++;

    }
}
console.log(counterNegative);

//5
let counterOdd = 0;
let sumPositiveOdd = 0;
for(let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0 && i % 3 === 0) {
        counterOdd++;
        sumPositiveOdd += arr[i];
        console.log(arr[i]);
    }
}
console.log(counterOdd);

//6
let counterPair = 0;
let sumPositivePair = 0;
for(let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0 && i % 2 === 0) {
        counterPair++;
        sumPositivePair += arr[i];
        console.log(arr[i]);
    }
}
console.log(counterPair);

//7
//вычисление в 6 задаче
console.log(sumPositivePair);

//8
//вычисление в 5 задаче
console.log(sumPositiveOdd);

//9
let mult = 1;
for(let i = 0; i < arr.length; i++) {
    if(arr[i] >= 0){
        console.log(arr[i]);
        mult *= arr[i];
    }
}
console.log(mult);

//10
let max = arr[0];
let maxi = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        arr[maxi] = 0;
        maxi = i;
    } else {
        arr[i] = 0;
    }
}

console.log(arr);



