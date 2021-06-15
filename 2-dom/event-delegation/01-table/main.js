"use strict";

let selectedTd;

function highlight(td) {
  if (selectedTd) {
    // 이미 강조되어있는 칸이 있다면 원상태로 바꿔줌
    selectedTd.classList.remove("highlight");
  }
  selectedTd = td;
  selectedTd.classList.add("highlight"); // 새로운 td를 강조 함
}

// v1. event delegation
// ------------------------------------------------------------------------------------
table.onclick = function (event) {
  let target = event.target; // 클릭이 어디서 발생했을까요?

  if (target.tagName != "TD") return; // TD에서 발생한 게 아니라면 아무 작업도 하지 않습니다,

  highlight(target); // 강조 함
};
// 위 코드는 단점이 있습니다.
// td 엘리먼트가 아닌 내부 strong 엘리먼트을 클릭하면
// strong 엘리먼트가 event.target이 되면 작동하지 않습니다.
// ------------------------------------------------------------------------------------

// v2. event delegation refactoring
// ------------------------------------------------------------------------------------
// table.onclick = function (event) {
//   let td = event.target.closest("td"); // 이벤트가 발생한 요소부터 시작해 위로 올라가며 가장 가까운 <td> 요소를 찾습니다.

//   if (!td) return; // event.target이 <td>안에 있지 않으면 그 즉시 null을 반환하므로 아무 작업도 일어나지 않습니다.

//   if (!table.contains(td)) return; // 중첩 테이블이 있는 경우 event.target은 현재 테이블 바깥에 있는 <td>가 될 수도 있습니다.

//   highlight(td); // 진짜 td를 강조해 줍니다.
// };
// ------------------------------------------------------------------------------------
