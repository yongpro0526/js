// 반복문의 중첩

// for(let i = 1; i <= 10; i++) {

//     console.log(`${i}번째 회전`);

// 	for(let j = 1; j <= 9; j++) {
// 		console.log(`${i}-${j}`);
// 	}

//     console.log(`${i}번째 회전 끝`)
//     console.log(`-------------------------`)
// }


// 2단부터 9단까지 모두 출력

for(let x = 2; x <=9; x++) {
    console.log(`=== ${x}단 ===`);
    for(let y = 1; y <= 9; y++) {
        console.log(`${x} x ${y} = ${x * y}`);
    }
    console.log(); // 줄바꿈
}