"use strict";

/******************************************
 * 1. 루프 클로저 문제 해결하기
 ******************************************/
window.onload = function () {
  for (var i = 0; i < 5; i++) {
    document.getElementById("btn" + i).addEventListener(
      "click",
      function () {
        console.log(i);
      },
      false
    );
  }
};

/******************************************
 * 2. 클로저로 토글 상태 유지하기
 ******************************************/
// var box = document.querySelector(".box");
// var toggleBtn = document.querySelector(".toggle");

// var toggle = (function () {
//   var isShow = false;

//   // 클로저를 반환
//   return function () {
//     box.style.display = isShow ? "block" : "none";
//     // 상태 변경
//     isShow = !isShow;
//   };
// })();

// // 이벤트 프로퍼티에 클로저를 할당
// toggleBtn.onclick = toggle;

/******************************************
 * 3. 클로저로 카운터 구현하기
 ******************************************/
// function counter() {
//   let count = 0;
//   return function () {
//     return count++;
//   };
// }

// const countValue = counter();
// countValue(); // 0
// countValue(); // 1
// countValue(); // 2

/******************************************
 * 4. 클로저로 adder 구현하기
 ******************************************/
// function adder(number1) {
//   return function (number2) {
//     return number1 + number2;
//   };
// }

// const addTen = adder(10);
// addTen(5); //15
// addTen(7); //17

// const addFive = adder(5);
// addFive(100); //105
// addFive(150); //155
