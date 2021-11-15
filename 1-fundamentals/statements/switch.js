const expr = "딸기";
switch (expr) {
  case "사과":
    console.log(`${expr}(은)는 개당 1000원이에요!`);
    break;
  case "딸기":
  case "귤":
    console.log(`${expr}(은)는 한박스에 9900원이에요!`);
    break;
  default:
    console.log(`죄송해요. ${expr}(은)는 재고가 없어요!ㅜㅜ`);
}
