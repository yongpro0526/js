// 1. 구구단 5단을 출력
// 2. 7 ~ 100의 정수 중에서 7의 배수를 출력
// 3. 1 ~ 50의 홀수의 합.
// 4. 100의 약수의 합.


for(let a = 1; a <= 9; a++) {
    let b = 5 * a;
    console.log(`5 x ${a} = ${b}`);
}

for(let c = 7; c <= 100; c++) {
    if(c % 7 === 0) {
        console.log(c);
    }
}
// 이건 1씩 더하는 식이고, 7씩더하거나 곱하는 식도 될듯?

// 가로로 출력하는 방법
let str = "";
for(let i = 7; i <=100; i+=7) {
    str += i + " ";
}
console.log(str);

let e = 0;
for(let d = 1; d <= 50; d++) {
    if(d % 2 !== 0) {
        e += d // e = e + d랑 같은 의미
    }
}
console.log(`1 ~ 50의 홀수의 합은 ${e}이다.`);

let g = 0;
for(let f = 1; f <= 100; f++) {
    if(100 % f === 0) {
        g += f;
    }
}
console.log(`100의 약수의 합은 ${g}이다.`);