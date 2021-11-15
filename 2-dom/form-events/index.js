// new 연산자로 URLSearchParams 인스턴스 생성
// const queryString = new URLSearchParams(window.location.search);
// const inputText = queryString.get("input-text");
// const inputHiddens = queryString.getAll("input-hidden");
// const inputHidden = inputHiddens[0];

// const inputTextObject = document.getElementsByName("input-text")[0];
// inputTextObject.value = inputText;
// inputTextObject.focus();

class App {
  constructor(querySelector) {
    this.elem = document.querySelector(querySelector);
  }
  init() {
    if (!this.elem) {
      return;
    }
    this.getItems();
    this.assignElement();
    this.attatchEventListeners();
    this.render();
  }
  getItems() {
    const items = sessionStorage.getItem("items");
    this.items = JSON.parse(items || "[]");
  }
  setItems() {
    const items = JSON.stringify(this.items);
    sessionStorage.setItem("items", items);
  }
  assignElement() {
    this.elemList = this.elem.querySelector("#list");
    this.elemListItem = this.elem.querySelector("#listItem");
    this.elemInputText = this.elem.querySelector("[name='input-text']");
  }
  attatchEventListeners() {
    this.elem.addEventListener("click", (e) => this.onClick(e));
    this.elem.addEventListener("submit", (e) => this.onSubmit(e));
  }
  onClick(e) {
    const target = e.target;
    const action = target.dataset.action;
    if (action) {
      const index = target.parentElement.dataset.index;
      this[action](index);
    }
  }
  onSubmit(e) {
    e.preventDefault();
    this.create();
  }
  create() {
    this.items.push(this.elemInputText.value);
    this.elemInputText.value = "";
    this.setItems();
    this.render();
  }
  update(index) {
    const name = this.elem.querySelectorAll("[name='names']")[index].value;
    this.items[index] = name;
    this.setItems();
    this.render();
  }
  delete(index) {
    this.items.splice(index, 1);
    this.setItems();
    this.render();
  }
  render() {
    this.elemList.innerHTML = "";
    for (let index in this.items) {
      const newDivChild = this.elemListItem.cloneNode(true);
      newDivChild.dataset.index = index;
      newDivChild.querySelector("input").value = this.items[index];
      this.elemList.appendChild(newDivChild);
    }
  }
}

const app = new App("#app");
app.init();
