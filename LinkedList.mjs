// 단일 연결 리스트에서 사용할 노드 클래스
class Node {
    constructor(data, next = null) {
        this.data = data; // 저장할 데이터
        this.next = next; // 다음 노드를 가리키는 포인터
    }
}

class LinkedList {
    constructor() {
        this.head = null;   // 리스트의 첫 번째 노드
        this.count = 0;     // 노드 개수
    }

    // 지정한 위치(index)에 새 노드를 삽입
    insertAt(index, data) {
        if (index < 0 || index > this.count) {
            throw new Error("범위를 넘어갔습니다.");
        }

        const newNode = new Node(data);

        if (index === 0) {
            // 맨 앞에 삽입
            newNode.next = this.head;
            this.head = newNode;
        } else {
            // 중간 또는 마지막 위치 삽입
            let currentNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }

        this.count++;
    }

    // 맨 끝에 삽입
    insertLast(data) {
        this.insertAt(this.count, data);
    }

    // 지정한 위치의 노드를 삭제하고 반환
    deleteAt(index) {
        if (index < 0 || index >= this.count) {
            throw new Error("범위를 넘어갔습니다.");
        }

        let deleteNode;

        if (index === 0) {
            // 맨 앞 노드 삭제
            deleteNode = this.head;
            this.head = this.head.next;
        } else {
            // 중간 또는 끝 노드 삭제
            let currentNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            deleteNode = currentNode.next;
            currentNode.next = currentNode.next.next;
        }

        this.count--;
        return deleteNode; // 필요에 따라 deleteNode.data 만 반환할 수도 있음
    }

    // 마지막 노드 삭제
    deleteLast() {
        return this.deleteAt(this.count - 1);
    }

    // 지정한 인덱스 위치의 노드 반환
    getNodeAt(index) {
        if (index < 0 || index >= this.count) {
            throw new Error("범위를 넘어갔습니다.");
        }

        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    // 리스트의 모든 노드를 출력
    printAll() {
        let currentNode = this.head;
        let text = "[";

        while (currentNode !== null) {
            text += currentNode.data;
            currentNode = currentNode.next;
            if (currentNode !== null) {
                text += ", ";
            }
        }

        text += "]";
        console.log(text);
    }
}

export { Node, LinkedList };
