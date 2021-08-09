class Queue {
  #items = [];

  enqueue(...elements) {
    return this.#items.push(...elements);
  }

  dequeue() {
    return this.#items.shift();
  }

  front() {
    return this.#items[0];
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

  // print는 큐에 쌓인 내용물을 콘솔에서 확인해보는 헬퍼 메소드입니다.
  print() {
    console.log(this.#items.toString());
  }
}

// 큐 인스턴스 생성
var queue = new Queue();

// 빈 큐 여부 확인
console.log("빈 큐 여부:", queue.isEmpty()); // true

// 원소 추가
queue.enqueue("지민");
queue.enqueue("정국");
queue.enqueue("호석");

// 첫번째 원소 조회
console.log("큐의 첫번째 원소:", queue.front()); // 지민

// 큐의 크기 확인
console.log("큐의 크기:", queue.size()); // 3

// 큐 빼내기
queue.dequeue();
queue.print(); // 정국, 호석

// 큐 비우기
queue.clear();
queue.size(); // 0
