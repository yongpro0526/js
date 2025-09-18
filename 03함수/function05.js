function some() {
    console.log("say hello!");
}

let x = some;
console.log(x);

x(); // x를 함수처럼 사용이 가능해짐.


// 익명함수
let sayHello = function() {
    console.log("say hello!!")
}

sayHello();

// 두 수의 덧셈을 반환하는 익명함수
let add = function(a, b) {
    return a + b;
}

console.log(add(1, 2));