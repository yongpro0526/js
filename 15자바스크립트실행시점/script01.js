// // 1. window.onload = 화면이 완전히 그려진 이후에 실행

// window.addEventListener("load", () => {
//     let box = document.getElementById("box");
//     box.onclick = function(e) {
//         alert(e.target);
//     }
// });


// // 2. document.DOMContentLoaded - 태그가 그려진 이후에 실행(css, 이미지 상관 없이)
// document.addEventListener("DOMContentLoaded", () => {
//     let box = document.getElementById("box");
//     box.onmouseover = function(e) {
//         console.log(e.target)
//     }
// });

let box = document.getElementById("box");
box.onclick = function(e) {
    alert(e.target);
}


// 자바스크립트의 순서가 자바스크립트가 먼저 나오고 화면이 늦게 나올때, 화면이 먼저 나오게 하고 자바스크립트가 실행 될 수 있게 하는 방법