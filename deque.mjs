// DoubleLinkedList 클래스를 가져옴 (이중 연결 리스트 사용)
import { DoubleLinkedList } from "./DoubleLinkedList.mjs";

class Deque {
    constructor() {
        // 내부적으로 DoubleLinkedList를 사용하여 양쪽에서 삽입/삭제가 가능하게 함
        this.list = new DoubleLinkedList();
    }

    // 모든 요소 출력 (DoubleLinkedList의 printAll을 호출)
    printAll() {
        this.list.printAll();
    }

    // 앞쪽(헤드)에 요소 추가
    addFirst(data) {
        this.list.insertAt(0, data); // 0번째 위치에 삽입
    }

    // 앞쪽(헤드) 요소 제거 후 반환
    removeFirst() {
        return this.list.deleteAt(0); // 0번째 요소 삭제
    }

    // 뒤쪽(테일)에 요소 추가
    addLast(data) {
        this.list.insertLast(data); // 마지막에 삽입
    }

    // 뒤쪽(테일) 요소 제거 후 반환
    removeLast() {
        return this.list.deleteLast(); // 마지막 요소 삭제
    }

    // Deque가 비어 있는지 여부 반환
    isEmpty() {
        return this.list.count === 0; // 요소 개수가 0이면 true
    }
}

// Deque 클래스를 다른 파일에서 사용할 수 있도록 export
export { Deque };
