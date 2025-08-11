import { DoubleLinkedList } from "./DoubleLinkedList.mjs";

class Queue {
    constructor() {
        this.list = new DoubleLinkedList();
    }

    // 큐의 끝에 데이터 추가
    enqueue(data) {
        this.list.insertLast(data); // 맨 뒤에 삽입
    }

    // 큐의 앞에서 데이터 제거 후 반환
    dequeue() {
        try {
            return this.list.deleteAt(0); // 맨 앞에서 삭제
        } catch (e) {
            return null;
        }
    }

    // 큐의 앞(front) 데이터 확인 (삭제하지 않음)
    front() {
        return this.list.head ? this.list.head.data : null;
    }

    // 큐가 비어 있는지 확인
    isEmpty() {
        return this.list.count === 0;
    }
}

export { Queue };
