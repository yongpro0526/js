// 객체 - {키:값} 형태로 여러값을 저장해놓은 구조.

let person = {
    name: "순자",
    age: 20
}

console.log(typeof person);

console.log(person.name);
console.log(person["name"])

// 객체의 값 수정하기 - 동일한 키값 변경
person.age = 30;
person["age"] = 31;
// 둘 중 어떤걸 사용해도 무방
console.log(person);

// 객체의 값 추가하기 - 새로운 키를 추가
person.hobby = ["잠자기", "코딩하기"];
// 혹은
person.hobby = "잠자기, 코딩하기"
// 도 가능
console.log(person);

// 객체의 값 삭제하기 delete 키워드를 이용
delete person.hobby;
console.log(person);


// 객체에는 함수도 저장될 수 있다.
let people = {
    name: "길동",
    sayHello: function() {
        console.log(`저의 이름은 ${this.name} 입니다`); // this의 의미: 객체에서는 '객체가 가지고 있는' 이라는 의미로 사용됨. 여기에서는 people이라는 객체가 가지고 있는 name값.
    }
}
console.log(people.name);
console.log(people.sayHello());

console.log("---------------------------------------------------------------------------------------");
// 본인 이름의 객체를 생성
// 키값: name, age, cm, hello 함수, hobby 배열
let lyh = {
    name: "용훈",
    age: 28,
    cm: 200,
    hello: function() {
        console.log(`안녕하세요. 저는 ${this.name}이라고 합니다.`);
    },
    hobby: ["게임", "유튜브"]
}

console.log(lyh.hello());