// 연결 리스트에서 사용할 ListNode 헬퍼 클래스가 우선 필요합니다.
// 연결 리스트에 추가되는 원소가 바로 Node입니다.
// element가 바로 원소에 해당되며, next 프로퍼티는 다음 노드를 가리키는 포인터입니다.
class ListNode {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  // #length는 내부 프라이빗 프로퍼티로, 연결 리스트에 담긴 원소의 개수입니다.
  #length = 0;

  constructor(head = null) {
    // head는 연결이 시작되는 지점을 참조합니다.
    this.head = head;
  }

  /**
   * 리스트 끝에 원소 추가하기
   * @param {*} element 추가할 원소
   */
  append(element) {
    const node = new ListNode(element);
    let current;

    if (this.head === null) {
      // 리스트가 비어있다면,
      this.head = node;
    } else {
      // 끝에 새 원소를 추가하려면 먼저 리스트의 마지막 원소를 찾아야한다.
      // 유일한 단서는 첫 번째 원소를 가리키고 있는 참조변수(head)이다.
      current = this.head;

      // 마지막 원소를 찾을 때까지 루프로 순회한다.
      // next가 null이 되는 지점에서 루프를 끝낸다.
      while (current.next) {
        current = current.next;
      }
      // current가 마지막 원소이므로
      // current.next에 새로 추가한 원소를 가리키게 하면 성공이다.
      current.next = node;
    }

    this.#length++; // 리스트의 크기를 업데이트한다.
  }

  /**
   * 원소의 위치를 기준으로 삭제
   * @param {number} position 삭제할 원소의 위치
   * @returns 삭제된 원소
   */
  removeAt(position) {
    // position 값의 유효성을 체크한다. (0부터 length - 1)
    if (position > -1 && position < this.#length) {
      let current = this.head,
        previous,
        index = 0;

      if (position === 0) {
        // 첫 번째 원소를 삭제할 경우
        this.head = current.next; // head가 그 다음 요소를 가리키도록 바꿔준다.
      } else {
        while (index++ < position) {
          // 리스트를 원하는 위치까지 루프를 돌린다.
          previous = current; // previous로 현재 원소의 바로 이전 원소를 가리킨다.
          current = current.next; // current는 항상 리스트의 현재 원소를 가리키는 변수다.
        }

        // 원소를 삭제하기 위해 previous.next가 current.next를 가리키게 바꿔치기 한다.
        previous.next = current.next;
      }

      this.#length--; // 리스트의 크기를 업데이트한다.

      return current.element;
    } else {
      // 유효한 position이 아니라면 삭제된 원소가 하나도 없음을 알린다.
      return null;
    }
  }

  /**
   * 임의의 위치에 원소 삽입하기
   * @param {number} position 원소를 삽입할 위치의 인덱스
   * @param {*} element
   */
  insert(position, element) {
    // position 값의 유효성을 체크한다. (0부터 length)
    if (position > -1 && position <= this.#length) {
      const node = new ListNode(element);
      let current = this.head,
        previous,
        index = 0;

      if (position === 0) {
        // 첫 번째 원소를 추가할 경우
        node.next = current;
        this.head = node;
      } else {
        while (index++ < position) {
          // 리스트를 원하는 위치까지 루프를 돌린다.
          previous = current; // previous로 현재 원소의 바로 이전 원소를 가리킨다.
          current = current.next; // current는 항상 리스트의 현재 원소를 가리키는 변수다.
        }
        node.next = current;
        previous.next = node;
      }

      this.#length++; // 리스트의 크기를 업데이트한다.

      return current.element;
    } else {
      // 유효한 position이 아니라면 리스트에 아무것도 추가되지 않았음을 알린다.
      return false;
    }
  }

  /**
   * 원소 값을 인자로 받아 리스트에서 해당 원소의 인덱스를 반환한다.
   * @param {*} element
   */
  indexOf(element) {
    let current = this.head,
      index = 0;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  }

  /**
   * removeAt과 indexOf 메소드를 활용하여 원소의 값을 기준으로 삭제
   * @param {*} element 삭제할 원소의 값
   */
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  /**
   * @returns 리스트가 비어있는지 여부
   */
  isEmpty() {
    return this.#length === 0;
  }

  /**
   * @returns 리스트의 크기
   */
  size() {
    return this.#length;
  }

  /**
   * 리스트를 비운다.
   */
  clear() {
    this.head = null;
  }
  /**
   * 리스트를 문자열로 변환한다.
   */
  toString() {
    let current = this.head,
      string = "";

    while (current) {
      string += current.element;
      current = current.next;
    }

    return string;
  }

  /**
   * @returns head
   */
  getHead() {
    return this.head;
  }
}

// 리스트 인스턴스 생성
const list = new LinkedList();

// 리스트에 원소를 추가
list.append("hello");
list.append("world");
list.append("javascript");

// 리스트를 문자열로 변환
console.log(list.removeAt(2)); // javascript

// 연결 리스트의 크기를 확인
console.log(list.size()); // 2

// 리스트를 문자열로 변환
console.log(list.toString()); // helloworld

// 원소 값을 인자로 받아 리스트에서 해당 원소의 인덱스를 반환
console.log(list.indexOf("hello")); // 0
console.log(list.indexOf("world")); // 1

// 리스트가 비어있는지 체크
console.log(list.isEmpty()); // false

// head를 반환
console.log(list.getHead()); // ListNode {element: 'hello', next: ListNode}

list.size();
