// JSON => 자바스크립트 오브젝트 표기법 (문자열)
// 네트워크 상에서 데이터를 교환할때, 사용하는 표준문법

let obj = {
    name: "홍길동",
    age: 20
}; // object
let json = '{"name": "홍길동, "age": 20}';  // JSON

// 오브젝트 => JSON으로 변환시켜주는 함수 JSON.stringify()
let result = JSON.stringify(obj);
console.log(result);

// JSON => 오브젝트로 형변환 해주는 함수 JSON.parse()
let result2 = JSON.parse(result);
console.log(result2);

// JSON데이터는 모든 키, 문자열이 ""로 묶여있어야함.
let result3 = JSON.parse('{addr: "서울"}');
console.log(result3);