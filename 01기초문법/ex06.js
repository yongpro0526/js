// 자동 형변환 -> 연산시에 자동으로 타입이 변하게 됩니다.

let num = 10 + 3.14;
console.log(num);

let text = "10" + 3.14 + 5;
console.log(text);
// 문자열을 가장 강한 타입이어서 문자열에 더해지면 모두 문자열이 됨.

let text2 = 3.14 + 5 + "10";
console.log(text2);

let num2 = "5" * 3;
console.log(num2);

// 명시적 형변환 -> 강제로 타입을 바꾸는 과정
// parseInt, parseFloat
// let result "5" + 1 은 원래 51이 나옴.
let result = parseInt("5") + 1
console.log(result);
console.log( parseInt("바꿀 수 없는 값이 들어가면?") ); // NaN - 바꿀 수 없는 값인 경우

console.log( parseFloat("3.14") ); // 실수값으로 변환 시에는 parseFloat

console.log(5 + ""); // 숫자를 문자열로 바꾸는 법