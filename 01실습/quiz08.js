// 문제1. 100까지의 수 중에서 3의 배수이면서 4의 배수인 수를 출력.
// 문제2. 524의 약수의 개수를 구하세요.
// 문제3. 100까지의 수 중에서 9의 배수의 합계.

let a = 3;
let b = 4;
let c = a * b;
while( c <= 100) {
    console.log(c);
    c += a * b;
}

let x = 524;
let y = 1;
let z = 0;
while(y <= x) { // y가 x와 같아질때(524)까지 반복문을 실행.
    if(x % y === 0) {
        z++; // x / y의 나머지가 0일때마다 z가 1씩 증가.
    }
    y++; // y에 1씩 더해서 반복문을 다시 실행.
}
console.log(z);

let n = 9;
let sum = 0;
while( n <= 100) { // n이 100이 될때까지 반복문을 실행.
    sum += n; // sum에 n씩 더함.
    n += 9; // n에 9를 더해서 반복문을 다시 실행.
}
console.log(sum);