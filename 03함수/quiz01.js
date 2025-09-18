// 문제 1: 별찍기 (레벨 1)
// - 숫자를 받아서 해당 개수만큼 별을 출력하는 함수 printStar를 만들어보세요.
// - 반환값이 없는 함수입니다.

function printStar(count) {
    let str = "";
    for (let i = 0; i < count; i++) {
        str += "*";
        }
    console.log(`${str}`); 
}
printStar(6);

// 문제 2: 현재 시간 출력 (레벨 1)
// - 현재 시간을 "현재 시간: [시간]" 형태로 출력하는 함수 showTime를 만들어보세요.
// - 현재 시간은 아래 함수로 구할수 있습니다.
// let now = new Date();
// let hours = now.getHours();      // 시 (0-23)
// let minutes = now.getMinutes();  // 분 (0-59)
// let seconds = now.getSeconds();  // 초 (0-59)
// - 반환값이 없는 함수입니다.

function showTime() {
    let now = new Date();
    let hours = now.getHours();      // 시 (0-23)
    let minutes = now.getMinutes();  // 분 (0-59)
    let seconds = now.getSeconds();  // 초 (0-59)
    console.log(`현재 시간: ${hours}시 ${minutes}분 ${seconds}초`)
}
showTime();

// 문제 3: 짝수 판별 (레벨 2)
// - 숫자를 받아서 짝수인지 홀수인지 판별하는 함수 isEven을 만들어보세요.
// - 짝수면 true, 홀수면 false를 반환하세요.

function isEven(num) {
    if(num > 0) {
        if(num % 2 === 0) {
            console.log(`${num}은(는) 짝수인가? true`);
        }
        else {
            console.log(`${num}은(는) 짝수인가? false`);
        }
    }
}
isEven(2);

// 문제 4: 원의 넓이 (레벨 2)
// - 반지름을 받아서 원의 넓이를 계산하는 함수 circleArea를 만들어보세요.
// - 원의 넓이 = π × 반지름² (π는 3.14159 사용)

function circleArea(rad) {
    console.log(`반지름이 ${rad}인 원의 넓이는 약 ${rad * rad * 3.14159}이다.`);
}
circleArea(3);

// 문제 5: 약수 개수 (레벨 3)
// - 양의 정수를 받아서 약수의 개수를 세는 함수 countDiv를 만들어보세요.
// - 예시: 12의 약수는 1, 2, 3, 4, 6, 12이므로 6개

function countDiv(div) {
    let cnt = 0;
    if(div % 1 !== 0) {
        console.log(`정수를 입력하세요.`)
    }
    else {
        if(div > 0) {
            for(let a = 1; a <= div; a++) {
                if(div % a === 0) {
                    cnt++
                }
            }
            console.log(`${div}의 약수의 개수는 ${cnt}개이다.`)
        }
        else {
            console.log(`양수를 입력하세요.`)
        }
    }
}
countDiv(12);


// 문제 6: 절대값 반환 (레벨 3)
// - 숫자를 받아서 절대값을 반환하는 함수 abs를 만들어보세요.
// - 예시: abs(-5) → 5, abs(3) → 3

function abs(num2) {
    if(num2 < 0) {
        console.log(`${num2}의 절대값은 ${num2 * -1}이다.`)
    }
    else {
        console.log(`${num2}의 절대값은 ${num2}이다.`)
    }
}
abs(-3);

// 선생님 풀이
function abs2(num3) {
    if(num3 < 0) {
        return -num3;
    } 
    else {
        return num3;
    }
}
abs2(-3);

// 문제 7: 최대값 반환 (레벨 4)
// - 세 개의 숫자를 받아서 가장 큰 수를 반환하는 함수 max를 만들어보세요.
// - Math.max() 함수는 사용하지 마세요.

function max(a, b, c) {
    if(a === b || b === c || c === a) {
        console.log(`각기 다른 3개의 수를 입력해주세요.`);
    }
    else{
        if(a > b && a > c) {
            console.log(`${a}, ${b}, ${c} 중 가장 큰 수는 ${a}이다.`);
        }
        else if(b > c && b > a) {
            console.log(`${a}, ${b}, ${c} 중 가장 큰 수는 ${b}이다.`);
        }
        else if(c > a && c > b) {
            console.log(`${a}, ${b}, ${c} 중 가장 큰 수는 ${c}이다.`);
        }
    }
}
max(1, 11, 111);

// 선생님 풀이
function max2(d,e,f) {
    let maxNum = d;
    if(b > maxNum) maxNum = e; // b가 a보다 크면 maxNum을 b로 출력
    if(c > maxNum) maxNum = f; // c가 b보다 크면 maxNum을 c로 출력
    return maxNum;
}

// 문제 8: 완전수 판별 (레벨 5)
// - 양의 정수를 받아서 완전수인지 판별하는 함수 isPerfect를 만들어보세요.
// - 완전수: 자신을 제외한 약수들의 합이 자신과 같은 수
// - 예시: 6의 약수는 1, 2, 3, 6이고, 1+2+3=6이므로 완전수

function isPerfect(pos) {
    if(pos % 1 !== 0) {
        console.log(`정수를 입력하세요.`)
    }
    else {
        if(pos > 0) {
            let total = 0;
            for(let a = 1; a < pos; a++) {
                if(pos % a === 0) {
                    total += a;
                }
            }
            if(total === pos) {
                console.log(`${pos}은(는) 완전수이다.`);
            }
            else {
                console.log(`${pos}은(는) 완전수가 아니다.`);
            }
        }
        else {
            console.log(`양수를 입력하세요.`);
        }
    }
}
isPerfect(28);

// 선생님 풀이
function isPrefect2(pos2) {
    let sum = 0;
    for(let i = 1; i < pos2; i++) {
        if(pos2 % i === 0) {
            sum += i
        }
    }
    return sum === pos2;
}
console.log(isPrefect2(28));