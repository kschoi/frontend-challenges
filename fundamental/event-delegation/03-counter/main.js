"use strict";

document.addEventListener("click", function (event) {
  if (event.target.dataset.counter != undefined) {
    // 속성이 존재할 경우
    event.target.value++;
  }
});
// 문서 레벨의 핸들러를 만들 땐 항상 `addEventListener`를 사용하세요.
// `document` 객체에 핸들러를 할당할 때는 `document.onclick`를 사용해선 안 됩니다.
// `document.onclick`은 충돌을 일으킬 가능성이 있기 때문에 무조건 `addEventListener`를 사용해야 합니다.
// `document.onclick`은 새로운 핸들러가 이전의 핸들러를 덮어쓸 수 있습니다.
// 코드 곳곳에서 `document`에 다수의 핸들러를 할당할 수 있습니다. 실제 프로젝트에서 이는 자연스러운 일입니다.
