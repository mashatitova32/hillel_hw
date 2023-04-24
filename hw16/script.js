let createSum = function () {
    let a = 0;
    return function (x) {
        a += x;
        return console.log(a);
    }
};
let sum = createSum();

sum(3);
sum(5);
sum(20);