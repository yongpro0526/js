// 반복문의 탈출
for(let i = 1; i <= 10; i++) {
    if(i === 3) {
        // break; // 반복문을 중단하고 빠져나옴.
        continue; // 반복문을 건너뛰고 다음을 반복.
    }
    console.log(i);
}
console.log(`반복문 종료!!`);