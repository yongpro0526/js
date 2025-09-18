// 데이터 타입 (각 변수들은 암묵적으로 데이터에 대한 종류를 가지고 있습니다.)
// let name = 홍길동; 틀린 표기
let name = "홍길동"; // 맞는 표기, string 타입
let age = 20; // number 타입
let kg = 55.14; // number 타입 정수, 실수 상관없음

console.log(name + "님의 나이는 " + age + "세이고 몸무게는 " + kg + "입니다");

let bool = true;
bool = false;
console.log("거짓은 영어로:" + bool);

// null은 초기화는 했지만, 값이 없을때 나타남
// 코드 러너에서 document는 사용 불가
// let x = document.getElementById("이런건 화면에 없어!");
// console.log(x);

// undefiend - 초기화를 하지 않은 경우에 나타남.
let y;
console.log(y);
// y의 값을 지정하지 않았기에, undefuned로 출력 됨.

// 변수의 타입 확인이 필요한 경우에, typeof 키워드로 확인 할 수 있음.
console.log(typeof name);
console.log(typeof age);
console.log(typeof kg);
console.log(typeof bool);
console.log(typeof y);


