// 랜덤한 점수를 하나 생성 1~100
let point = parseInt(Math.random() * 100 + 1);
let grade = "불합격";

if (point >= 60) {
    grade = "합격";
} 
else {
    grade = "불합격";
}

console.log("점수" + point);
console.log(grade);
console.log("------------------------let변수의 scope------------------------") // scope: 범위

// 중괄호 스코프 - 중괄호 안에서 선언된 변수는 중괄호 안에서만 쓸 수 있음.
// 중괄호 밖에서 선언된 변수는 중괄호 안에서 사용할 수 있지만, 중괄호 안에서 선언된 변수는 중괄호 밖에서 사용할 수 없음.
if(true) {
    let name = "홍길동";
}