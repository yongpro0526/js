// 산술연산자
let a = 5 * 3;
let b = 5 / 3;
let c = 5 % 3;

console.log(a, b, c);
console.log(parseInt(b));

// 전위연산 - 먼저 증가하고, 이후에 대입
let x = 5;
let pre = ++x;
console.log("x는: " + x);
console.log("pre는: " + pre);

// 후위연산 - 먼저 대입하고, 이후에 증가
let y = 5;
let post = y++;
console.log("y는: " + y);
console.log("post는: " + post);

// 일반적인 ++, --의 표현은
let num = 1;
num++;
++num
num--
--num
