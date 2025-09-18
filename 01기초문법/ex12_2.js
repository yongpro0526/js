// 반복문 안에서 조건식
// x까지의 수 중에서 짝수들의 합계

// let i = 1;
// let sum = 0;
// while( i <= 100) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
//     else {
//         +0
//     }
//     i++
// }
// console.log(`1 ~ 100의 수 중에서 짝수의 합 ${sum}`);

let i = 2;
let sum = 0;
while( i <= 100) {
    sum += i;
    i += 2;
}
console.log(`1 ~ 100의 수 중에서 짝수의 합 ${sum}`);