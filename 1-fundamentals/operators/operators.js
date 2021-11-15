function Person({ ...args }) {
  // arguments: { a: 1, b: 3 }라는 하나의 객체가 넘어오는데,
  // const a = 1;
  // const b = 3;
  Object.assign(this, args);
}

var yuna = new Person({
  name: "김연아",
  age: 30,
  actions: {
    skate() {
      return "스케이팅을 할 수 있습니다.";
    },
  },
});

var taehwan = new Person({
  name: "박태환",
  age: 31,
  actions: {
    swim() {
      return "수영을 할 수 있습니다.";
    },
  },
});

var baby = new Person({
  name: "신생아",
  age: 0,
});

var ghost = new Person({
  name: "유령",
  fly() {
    return "날 수 있습니다.";
  },
});

var players = [yuna, taehwan, baby, ghost];

console.log(typeof players[0]);
console.log(players[0] instanceof Person);

for (player of players) {
  console.log("\n");
  console.log("이름:", player.name);

  // Conditional (ternary) operator
  console.log("음주 가능여부:", player.age >= 18 ? "가능" : "불가능");

  // optional chaining
  player?.actions?.skate && console.log(player.actions.skate());
  player?.actions?.swim && console.log(player.actions.swim());
  console.log("|| 연산자로 나이체크:", player?.age || "나이를 알 수 없습니다.");

  // Nullish coalescing operator
  console.log("?? 연산자로 나이체크:", player?.age ?? "나이를 알 수 없습니다.");
}
