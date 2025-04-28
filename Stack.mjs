import { LinkedList } from "./LinkedList"

class Stack {
    constructor() {
        this.list = new LinkedList;
    }

push(data) {
    this.lis.insertAt(0, data);
}

pop() {
    try {
        return this.list.deleteAt(0);
    } catch(e) {
        return null;

    }
}

Peek() {
    return this.list.getNodeAt(0);
}

isEmpthy() {
    return (this.list.count==0);
}

}

export {Stack};