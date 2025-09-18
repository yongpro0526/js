// var 변수의 scope(범위)는 함수입니다. -> 문제가 많음
// let 변수의 scope(범위)는 중괄호 입니다.
if(true) {
    var x = 10; // 전역변수 취급
    let y = 20; // 지역변수 취급
}
console.log(x);
// console.log(y); // 지역변수이기 때문에, return을 해줘야 함.

let a = "홍길동"; // 전역변수
let some = function() {
    console.log(a);

    let b = "이순신"; // 지역변수
    console.log(b);
}

// console.log(b); // 지역변수이기때문에, error