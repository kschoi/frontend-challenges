"use strict";

class Menu {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this);
    // this.onClick을 this에 바인딩했습니다.
    // 이렇게 하지 않으면 this는 Menu 객체가 아닌 DOM 요소(elem)를 참조하게 됩니다.
    // 이렇게 되면 this[action]에서 원하는 것을 얻지 못합니다.
  }

  save() {
    alert("저장하기");
  }

  load() {
    alert("불러오기");
  }

  search() {
    alert("검색하기");
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      this[action]();
    }
  }
}
// 이런 식으로 이벤트 위임을 활용하면 어떤 이점이 있을까요?
// 1. 버튼마다 핸들러를 할당해주는 코드를 작성할 필요가 없어집니다. 메서드를 만들고 HTML에 그 메서드를 써주기만 하면 됩니다.
// 2. 언제든지 버튼을 추가하고 제거할 수 있어 HTML 구조가 유연해집니다.
// 3. .action-save, .action-load 같은 클래스를 사용할 수도 있지만, data-action 속성이 좀 더 의미론적으로 낫습니다. CSS 규칙을 적용할 수도 있게 됩니다.

new Menu(menu);
