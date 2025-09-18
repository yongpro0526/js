function devide(a, b) {
    // a를 b로 나눈 몫을 반환하는 함수
    // b가 0이면 안됨.
    try {
        if(b === 0) {
            throw new Error("b는 0일 수 없습니다."); // catch로 넘겨야할때, 예외(에러)를 직접 생성
        }
        if(typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("매개변수는 숫자여야 합니다")
        }
        return a / b;
    } catch (error) {
        console.log(error.message); // 에러의 메시지를 볼 수 있음
        return null;
    }

}
console.log(devide(10, 0));
console.log(devide("a", "b"));