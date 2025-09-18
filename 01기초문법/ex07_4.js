// && - 양쪽 항이 모두 true여야 true로 출력됨.
// || - 양쪽 항 중 하나만 true여도 true로 출력됨.
let a = true;
let b = false;

// console.log("&&의 결과: " + a && b); // <"&&의 결과: " + a> 와 <b>가 비교가 되버림.
console.log("&&의 결과: " + (a && b) ); // ()를 넣어주면 계산되는 순서를 바꿀 수 있음.
console.log("||의 결과: " + (a || b) );
console.log("!: " + !a);

// 어떤 수가 3의 배수이면서, 4의 배수인 경우 - 조건식으로
let x = 12;
console.log( x % 3 === 0);
console.log( x % 4 === 0);
console.log( x % 3 === 0 && x % 4 === 0 );
