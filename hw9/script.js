//1
let result = '';

for (let i = 10; i <= 20; i++){
    result += `${i}${i == 20 ? '.' : ','} `;
}
console.log(result);

//2
let result2 = '';

for (let i = 10; i <= 20; i++){
    result2 += `${i**2}${i === 20 ? '.' : ','}`;
}
console.log(result2);
//3
let result3 = '';

for (let i = 1; i <= 10; i++){
    result3 += `${i*7}${i === 10 ? '.' : ','}`;
}
console.log(result3);
//4
let sum4 = 0;
for (let i = 1; i <= 15; i++){
    sum4 += i;
}
console.log(sum4);

//5
let result5 = 1;

for (let i = 15;i <= 35; i++) {
    result5 = result5 * i;
}
console.log(result5);

//6
let n1 = 500;
let s = 0;
for (let i = 1; i <= n1; i++) {
    s = s + i;
}
s = s / n1;
console.log(s);

//7

let sum1 = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 == 0) {
        sum1 += i;
    }
}
console.log(sum1);
//8

for (let i = 100; i <= 200; i++){
    if (i % 3 === 0){
        console.log(i);
    }
}

//9
let n = 10;
let sum = 0;
 for (let i = 2; i<= n; i++) {
     if (n % i == 0) {
       console.log(i);
     }
 }

//10

 for (let i = 2; i <= n; i+=2) {
     if (n % i == 0) {
         console.log(i);
    }
}

//11
 for(let i = 2; i <= n; i+=2) {
     if (n % i == 0) {
         sum += i;
     }
 }
console.log(sum);

//12
for (let i = 1; i <= 10; i++){
    for (let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
}


