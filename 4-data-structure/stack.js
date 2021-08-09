class Stack {
  #items = [];

  push(...elements) {
    return this.#items.push(...elements);
  }

  pop() {
    return this.#items.pop();
  }

  peek() {
    return this.#items[this.#items.length - 1];
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  size() {
    return this.#items.length;
  }

  clear() {
    this.#items = [];
  }

  // print는 스택에 쌓인 내용물을 콘솔에서 확인해보는 헬퍼 메소드입니다.
  print() {
    console.log(this.#items.toString());
  }
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
