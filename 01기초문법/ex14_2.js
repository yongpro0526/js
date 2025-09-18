// 반복문의 중첩 활용

// 반복의 회전은 바깥에 따라서 안쪽 회전이 바뀔 수 있음.
// 바깥 반복문 - 행
// 안쪽 반복문 - 별출력

// *
// **
// ***
// ****
// *****
// ******

let star = 5;
let result1 = "";
for(let i = 1; i <= star; i++) {
    for(let j = 1; j <=i; j++) {
        result1 += "*";
    }
    result1 += "\n"
}
console.log(result1);

console.log("-------------------------------");

// *****
// ****
// ***
// **
// *

let star2 = 5;
let result2 = "";
for(let i = star2; i >= 1; i--) {
    for(let j = 1; j <= i; j++) {
        result2 += "*";
    }
    result2 += "\n";
}
console.log(result2);

// let star2 = 5; 로 별의 초기 개수 5개를 선언.
// let result2 = ""; 로 *이 가로로 배치 될 수 있게 선언.
// for(let i = star2; i >= 1; i--) {} 로 i가 5부터 1까지 감소될수 있게 함.
// for(let j = 1; j <= i; j++) {result2 += "*";} 로 j가 1씩 증가할때 마다 *이 하나씩 추가되게 함.
// j <= i 이고, i는 5부터 1까지 줄어들기 때문에, 첫번째는 5개, 두번째는 4개, 세번째는 3개, 네번째는 2개, 다섯번째에는 1개가 나오게 됨. 
// resul2 += "\n"; 로 줄바꿈을 설정.
// console.log(result2); 로 결과값을 출력.

// 선생님의 풀이
let result3 = "";
for(let i = 1; i <= star; i++) {
    for(let j = 1; j <= 6-i; j++) {
        result3 += "*";
    }
    result3 += "\n";
}
console.log(result3);