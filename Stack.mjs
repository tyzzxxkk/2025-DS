import { LinkedList } from "./LinkedList";

class Stack {
    constructor() {
        this.list = new LinkedList(); // 괄호 필수
    }

    // 스택에 데이터 추가 (push)
    push(data) {
        this.list.insertAt(0, data); // 맨 앞에 삽입
    }

    // 스택에서 데이터 제거 후 반환 (pop)
    pop() {
        try {
            return this.list.deleteAt(0); // 맨 앞에서 제거
        } catch (e) {
            return null; // 예외 발생 시 null 반환
        }
    }

    // 스택의 최상단 데이터를 확인 (삭제하지 않음)
    peek() {
        return this.list.getNodeAt(0)?.data ?? null; // 노드가 없으면 null
    }

    // 스택이 비었는지 확인
    isEmpty() {
        return this.list.count === 0;
    }
}

export { Stack };