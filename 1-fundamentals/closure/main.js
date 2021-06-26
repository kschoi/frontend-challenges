"use strict";

/*************************************************************************************
 * 1. 함수 내에 중첩된 내부 함수가 다른 실행 컨텍스트에서 실행되었으므로 클로저입니다.
 *************************************************************************************/
// for (var i = 0; i < 5; i++) {
//   console.log("클로저가 아닌 경우: ", i);
// }

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log("클로저인 경우: ", i);
//   }, 0);
// }

/*************************************************************************************
 * 2. 루프 클로저 문제 해결하기
 *************************************************************************************/
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

/*************************************************************************************
 * 3. 클로저로 토글 상태 유지하기
 *************************************************************************************/
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
