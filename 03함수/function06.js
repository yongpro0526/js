function first() {
    console.log("first 함수");
}

function second() {
    console.log("second 함수");
    
}

// 즉시 실행 함수
(function() {
    console.log("즉시실행함수 실행!");
})();

// 혹은 이렇게도 나타낼 수 있음.
(function(msg) {
    console.log(msg);
})("즉시실행함수 실행!");

// 즉시 실행 함수를 사용하는 이유.
// 1. 코드의 구조화 - 함수 단위로 묶는다.
// 2. 화면에서 초기에 가동되는 함수를 호출하는 용도. (한번에 묶는 용도?)