// 화살표함수
// 익명함수
// let add = function(a, b) {
//     return  a + b;
// }

// let add = (a, b) => {
//     return a + b;
// }

let add = (a, b) => a + b;

// 위 3개가 같은 의미임.
// 코드가 한 줄이면, {}를 생략하고, return을 생략할 수 있음.
// 만약 저 상태에서 return을 넣으면 그건 잘 못 된 문법임.

let some = () => console.log("Hello some"); // 함수 자체에서 Hello some 을 출력하겠다는 뜻
// let x = (a) => a % 2 == 0 ? "짝수" : "홀수"; // a값을 넣으면 a가 짝수인지 홀수인지 판별하는 함수.
// 위 아래가 같은 의미
let x = a => a % 2 == 0 ? "짝수" : "홀수";

// 매개변수가 하나면 () 생략 가능함.


// let person = () => {
//     return {name: "홍길동"};
// } // 는 한줄짜리 코드이기 떄문에,
let person = () => ({name: "홍길동"}); // 로 바꿀 수 있음.
// 객체는 {}로 표현되는데, 만약 객체를 반환해야한다면, ()로 묶어줘야함.

console.log(person());

console.log("--------------------------------------------------------");

// 선언적함수
function myName(name, age) {
    return `${name}님의 나이는 ${age}입니다.`;
}

// 익명함수
let myName2 = function(name, age) {
    return `${name}님의 나이는 ${age}입니다.`;
}

// 화살표 함수
let myName3 = (a, b) => (`${name}님의 나이는 ${age}입니다.`);

console.log(myName("홍길동", 100));
console.log(myName2("홍길동", 100));
console.log(myName3("홍길동", 100));