// 노드 클래스: 각각의 요소를 담는 단위
class Node {
    constructor(data, next = null, prev = null) {
        this.data = data; // 저장할 데이터
        this.next = next; // 다음 노드를 가리키는 포인터
        this.prev = prev; // 이전 노드를 가리키는 포인터
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null; // 맨 앞 노드
        this.tail = null; // 맨 끝 노드
        this.count = 0;   // 노드 개수
    }

    // 지정된 위치에 노드를 삽입
    insertAt(index, data) {
        if (index > this.count || index < 0) {
            throw new Error("범위를 넘어갔습니다.");
        }

        const newNode = new Node(data);

        if (index === 0) {
            // 맨 앞에 삽입
            newNode.next = this.head;
            if (this.head !== null) {
                this.head.prev = newNode;
            } else {
                // 리스트가 비어있으면 tail도 새 노드로 설정
                this.tail = newNode;
            }
            this.head = newNode;
        } else if (index === this.count) {
            // 맨 뒤에 삽입 (insertLast와 동일)
            newNode.prev = this.tail;
            if (this.tail !== null) {
                this.tail.next = newNode;
            } else {
                // 리스트가 비어있으면 head도 새 노드로 설정
                this.head = newNode;
            }
            this.tail = newNode;
        } else {
            // 중간에 삽입
            let currentNode = this.head;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
            newNode.prev = currentNode.prev;
            newNode.next = currentNode;
            if (currentNode.prev) {
                currentNode.prev.next = newNode;
            }
            currentNode.prev = newNode;
        }

        this.count++;
    }

    // 맨 뒤에 노드를 삽입
    insertLast(data) {
        this.insertAt(this.count, data);
    }

    // 지정한 위치의 노드를 삭제하고 반환
    deleteAt(index) {
        if (index >= this.count || index < 0) {
            throw new Error("범위를 넘어갔습니다.");
        }

        let deleteNode;

        if (index === 0) {
            // 맨 앞 노드 삭제
            deleteNode = this.head;
            if (this.head.next === null) {
                // 노드가 하나뿐인 경우
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
        } else if (index === this.count - 1) {
            // 맨 끝 노드 삭제
            deleteNode = this.tail;
            this.tail = this.tail.prev;
            if (this.tail) {
                this.tail.next = null;
            }
        } else {
            // 중간 노드 삭제
            let currentNode = this.head;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
            deleteNode = currentNode;
            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;
        }

        this.count--;
        return deleteNode;
    }

    // 맨 뒤 노드를 삭제하고 반환
    deleteLast() {
        return this.deleteAt(this.count - 1);
    }

    // 특정 인덱스 위치의 노드의 데이터를 반환
    getNodeAt(index) {
        if (index >= this.count || index < 0) {
            throw new Error("범위를 넘어갔습니다.");
        }
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode.data;
    }

    // 전체 리스트 내용을 출력
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

export { Node, DoubleLinkedList };
