// 변수의 선언방법
// var 이름;
var a;

a = 1; // 오른쪽에 있는 값을 왼쪽에 대입한다.

console.log(a);

// 선언과 초기화를 동시에
var b = 10;
console.log(b);

// js는 같은 이름으로 변수를 선언 할 수도 있지만, 지양합니다.
// 동일한 이름의 변수는 사용하지 않도록 주의합니다.
var b = "홍길동";
console.log(b);

// 변수의 값을 변경
a = 100;
console.log("변경된 a값:", a);

// 변수의 값을 다른 변수에 값에 저장하는 것도 됩니다.
var result = a + 100;
console.log("result의 값:", result);

// let변수 - ES6에서 추가된 키워드
// 동일한 변수 선언 불가 (var에서는 가능)
// let c = 10;
// let c = 20;

// const - ES6에서 추가된 키워드 (상수 = 변하지 않는 값)
const EARTH_RADIUS = 6400;
// 상수는 반드시 값을 선언하여야함.
EARTH_RADIUS = 7000;
// 상수는 한번 선언하면 절대 값을 변경하여서는 안 됨.
console.log(EARTH_RADIUS);