// 고차함수 - 함수의 매개변수로 함수가 들어가는 유형 (js가 좋아하는 문법)
// forEach

let arr = [1,2,3,4,5,6,7];


// let mySome = function(item, index) {
//     console.log(`값: ${item}, 인덱스: ${index}`) ;
// }

// arr.forEach(mySome);

arr.forEach(function(item, index) {
    console.log(`값: ${item}, 인덱스: ${index}`)
})

// 위 두개가 똑같은 의미.
// 만약 이걸 화살표 함수로 쓰고 싶다면,

// arr.forEach(f(item, index) => {
//     console.log(`값: ${item}, d인덱스: ${index}`)
// });

// 만약 index가 필요없을때,
arr.forEach(item => console.log(`값: ${item}`));
// 로 나타낼 수 있음.

console.log("------------------------------------------------");

// map = 반환에 담긴 값으로 새로운 배열을 만들어서 물러준다.
// let newArr = arr.map(function(item, index) {
//     return item * item;
// });
let newArr = arr.map( item => item * item);
console.log(newArr);

console.log("------------------------------------------------");

// filter - teturn이 tru인 값으로 조건부 필터링을 해줌
let newArr2 = arr.filter(function(item, index){
    return item % 2 === 0; // 짝수라면 true, 아니라면 false
});

console.log(newArr2);