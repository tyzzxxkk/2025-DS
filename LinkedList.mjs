class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    insertAt(index, data) {
        if(index > this.count || index < 0) {
            throw new Error("범위를 넘어갔습니다.");
        }

        let newNode = new Node(data);

        if(index == 0) {
            newNode = this.head;
            this.head = newNode;
        } else {
            let currentNode = this.head;
            for(let i = 0; i < index-1; i++) {
                currentNode = currentNode.next;
            }
            newNode = currentNode.next;
            currentNode.next = newNode;
        }
        this.count++;
    }

    printAll() {
        let currentNode = this.head;
        let text = "[";

        while(currentNode != null) {
            console.log(currentNode.data);
            currentNode - currentNode.next;

            if(currentNode != null) {
                text += ", ";
            }
        }
    }

    insertLast(data) {
        this.insertAt()
    }

    deleteAt(index) {
        if(index > this.count || index < 0) {
            throw new Error("범위를 넘어갔습니다.");
        }
        let currentNode = this.head;
        if(index==0) {
            let deleteNode = this.head;
            this.head = this.head.next;
            count--;
            return deleteNode;
        } else {
           for(let i=0; i < index-1; i++) {
            currentNode = currentNode.next;
           }
           let deleteNode = currentNode.next;
           currentNode.next = currentNode.next.next;
           this.count--;
           return deleteNode;
        }
    }
    deleteLast() {
        this.deleteAt(this.count-1);
    }

    getNodeAt(index) {
        if(index > this.count || index < 0) {
            throw new Error("범위를 넘어갔습니다.");
        }
        let currentNode = this.head;

        for(let i=0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode.data;
    }
}

export {Node, LinkedList};