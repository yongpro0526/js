// 1. registUser(유저객체)를 하나 생성합니다.
// 2. 전달된 유저객체의 name값이 두 글자 이하이거나, 비어있으면 예외처리를 진행합니다.
// 3. 유저객체 안에 name값이 정상값이라면, 유저의 이름을 반환하면 됩니다.

let user = {
    name: " ", 
    addr: "서울시"
};

function registUser(a) {
    try {
        if(a === user.name && user.name.length <= 2) {
            throw new Error("세글자 이상으로 입력해주세요.");
        }
        return a
    } catch (error) {
        console.log(error.message);
        return null;
    }
}
console.log(registUser(user));
console.log(registUser(user.name));
console.log(registUser(user.addr));


// 선생님 풀이
function registUser2(obj) {
    try {
        if(typeof obj !== "object") {
            throw new Error("객체를 전달하세요");
        }
        if(obj.name.length <= 2 || obj.name == null) {
            throw new Error("이름은 3글자 이상입니다.")
        }
        return obj.name;
    } catch(e) {
        console.log(e.massage);
        return null;
    }
}

registUser2(user);