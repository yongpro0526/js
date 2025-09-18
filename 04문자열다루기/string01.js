// 문자열 다루기 함수

let str = "hello world javascript";
console.log(`문자열 길이: ${str.length}`);

// 문자열 한글자 자르기
let s1 = str.charAt(3);
console.log(`index 3번째 문자열: ${s1}`);
console.log(`index 5번째 문자열: ${str.charAt(5)}`);

// 특정 문자 기준으로 문자열 자르기
let s2 = str.split("");
console.log(s2);
let s3 = str. split(" ");
console.log(s3);

// 특정 문자의 위치만 자르기
let s4 = str.substring(6, 11); // 6이상, 11미만 추출. 즉, 6,7,8,9,10에 해당하는 문자인 w,o,r,l,d 5개 문자 추출.
console.log(`6~11사이의 문자열: ${s4}`);

let s5 = str.substring(10); // 10이상만 추출
console.log(s5)

// 특정 위치로 문자열 찾기
console.log("l이 앞에서부터 처음으로 발견된 위치: " + str.indexOf("l"));
console.log(str.indexOf("o", 5)); // index 5번위치부터 o를 찾아라
console.log(str.lastIndexOf("a")); // 뒤에서부터 a를 찾기. 마지막에서 가장 가까이 있는 a는 index 15번 위치에 있기 때문에 15가 나옴.
console.log(str.includes("java")); // java라는 문자열이 포함되어있으면 true, 없으면 false
console.log(str.startsWith("hell")); // hell이라는 문자열로 시작되면 true, 아니면 falseconsole.log(str.endsWith("헑!")); // 헑!이라는 문자열로 끝나면 true, 아니면 false

// 문자열 변환
console.log("=".repeat(20)); // 문자열을 20회 반복해줌.
console.log(str.replace("l", "헐")); // "l"중에서 제일 앞에 있는 "l"을 "헐"로 바꿈.
console.log(str.replaceAll("l", "헑")) // 모든 "l"을 헑으로 바꿈.
// 원본 문자열을 변함없다는 사실을 기억하고 있어야함.

console.log(" hello    ".trim()); // hello의 양쪽 공백을 모두 제거해줌.
let text = "Hello";
console.log(text.toUpperCase()); // 전부 대문자로 바꿔줌.
console.log(text.toLowerCase()); // 전부 소문자로 바꿔줌.