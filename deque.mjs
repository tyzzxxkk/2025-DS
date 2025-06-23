import { DoubleLinkedList } from "./DoubleLinkedList.mjs" 

class Deque {
    constructor() {
        this.list = new DoubleLinkedList();
    }

    printAll() {
        this.list.printAll();
    }

    addFirst() {
        this.list.insertAt(0, data);
    }

    removeFirst() {
        return this.list.deleteAt(0);
    }

    addLast() {
        this.list.insertLast();
    }

    removeLast() {
        this.list.deleteLast();
    }

    isEmpty() {
        return (this.list.count === 0);
    }
}