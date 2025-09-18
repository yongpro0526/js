// 리턴 - 함수가 실행한 결과를 호출 구문으로 돌려주는 값

function add(a, b) {
    // let result = a + b;
    // return result; 
    // 이렇게 안 쓰고, 
    return a + b; // 이렇게 써도 됨.   
}

let result = add(3,5); // 리턴을 받아서 저장하는 코드
console.log(`함수 실행결과: ${result}`); // 8

// 리턴이 있는 함수는 호춞문이 실향결과를 돌려받기 때문데, 출력문에 함번에 쓸 수 있음.
console.log(`함수 실행결과: ${add(5, 5)}`); // 10

// 리턴이 있는 함수는 함수의 중첩도 가능함.
let result2 = add(add(1,2), add(3,5));
console.log(`함수 실행결과: ${result2}`); // 11

// 리턴 - 돌려주다 + 함수의 종료
// 반드시 양의 정수 값만 전달되어야 하는 함수
function some(num) {
    if(num <= 0) {
        return false; // 리턴으로 함수를 종료해주면서, 입력한 수가 0보다 작거나 같을때, 실행되지 않고, undefined가 나오게 됨.
        // return; 키워드를 사용하면, undefiend가 출력되기 때문에, boolean값을 출력하도록 만드는게 일반적.
    }
    return "전달받은 양의 정수는 " + num + "입니다"; // 리턴에서 함수가 종료되기 때문에, console.log("이거 실행되나!?");는 실행되지 않음.
    console.log("이거 실행되나!?");
}
console.log(some(10));