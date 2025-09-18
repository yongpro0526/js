// 배열에서 사용하는 다양한 함수

// 이번엔 배열의 선언을 New Array로 할거지만, 추천하는 방식은 아님.

// let arr = new Array(3); // 크기가 3이면서, 비어있는 배열.
// console.log(arr);
// let arr2 = new Array(1,2,3); //== [1,2,3]
// console.log(arr2);

let arr = [1,2,3,4,5];

arr.push(6);
console.log(arr);
let item1 = arr.pop(); // 맨 마지막에 값을 빼내서, 변수로 사용가능.
console.log(item1);
console.log(arr);

arr.unshift(100); // 배열 맨 앞에 100을 추가.
console.log(arr);
let item2 = arr.shift();
console.log(item2);

// arr.splice(1, 2); // 첫번째 인덱스에서, 2개를제거
// arr.splice(1, 1);
arr.splice(1, 0, 'a', 'b', 'c', 'd'); // 값을 3개이상 주면, 추가해줌.
console.log(arr);

// 탐색관련 함수
let item3 = arr.indexOf(4); // 4가 있는 위치값을 변수로 지정할 수 있음. 만약 찾는 값이 없으면, -1을 변수로.
console.log(item3)

if(arr.indexOf('a')!= -1 ) { // '만약 a가 목록에 존재한다면' 이라는 의미임.
    console.log('a는 존재합니다.');
}

if(arr.includes('a')) { // a가 있으면 true, 없으면 false
    console.log('a는 존재합니다.');
}