function Stack() {
  var items = [];

  this.push = (element) => {
    items.push(element);
  };

  this.pop = () => items.pop();

  this.peek = () => items[items.length - 1];

  this.isEmpty = () => items.length === 0;

  this.size = () => items.length;

  this.clear = () => {
    items = [];
  };

  // print는 스택에 쌓인 내용물을 콘솔에서 확인해보는 헬퍼 메소드입니다.
  this.print = () => {
    console.log(items.toString());
  };
}

var stack = new Stack();

// 빈 스택 여부 확인
console.log("빈 스택 여부:", stack.isEmpty()); // true

// 원소 추가
stack.push(5);
stack.push(8);

// 마지막 원소 조회
console.log("스택의 마지막 원소:", stack.peek()); // 8

// 스택의 크기 확인
console.log("스택의 크기:", stack.size()); // 2

// 스택 비우기
stack.clear();
stack.size(); // 0
