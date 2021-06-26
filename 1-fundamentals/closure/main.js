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
