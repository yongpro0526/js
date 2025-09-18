
let i = 1; // 시작값
let sum = 0; // 값을 누적할 변수는 반복문 밖에 선언

while(i <= 10) { // i를 이용해서 반복문의 조건식을 만든다.
    // console.log(i);

    sum = sum + i;
    // 혹은 sum += i; 로 적어도 됨.

    i++; // 언젠가는 조건식이 false가 되도록 처리

}

console.log("1에서 10까지의 합은", sum,"이다." );