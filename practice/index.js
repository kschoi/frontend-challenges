// 함수호출패턴 4가지와 this 바인딩 객체
function getThis(x, y) {
  console.log(this.name);
  console.log(x + y);
}

// 1. 함수 호출 패턴: 전역 객체 (Window);
// getThis();

// // 2. 메서드 호출 패턴
// const obj = {
//   name: "빵가게",
//   func: getThis,
// };
// const obj2 = {
//   name: "커피숍",
//   func: getThis,
// };
// obj.func();
// obj2.func();

// // 3. 생성자 함수 패턴
// function Waffle() {
//   this.name = "커피숍";
//   console.log(this.name);
// }
// const waffle = new Waffle();

// 4. call, apply, bind
const myThisObject = {
  name: "기철",
};

getThis.call(myThisObject, 1, 2);
getThis.apply(myThisObject, [1, 2]);
getThis.bind(myThisObject)(1, 2);
