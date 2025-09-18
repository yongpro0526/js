// 매개변수 = 함수가 전달받는 변수값
function sayHello(name, age) {
    console.log(`안녕하세요. ${name} 님! 너 몇살이야? ${age}세 입니다.`);
}

// 구구단 수를 매개변수로 전달 받아서, 구구단을 출력하는 함수
function gugudan(dan) {
    console.log(`==== ${dan} ====`)
    for(let i = 1; i <= 9; i++) {
        console.log(`${dan} x ${i} = ${dan * i}`);
    }
}

gugudan(2);
sayHello("길동", 20); // 출력결과: 안녕하세요. 길동 님! 너 몇살이야? 20세 입니다.
sayHello("철수"); // 매개변수가 일치하지 않으면 undefiend 출력. 하지만 정확히 맞춰서 전달하는게 맞음.

