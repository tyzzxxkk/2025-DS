import {Node, LinkedList} from './LinkedList.mjs'

let node1 = new Node(1);
let node2 = new Node(1);
let node3 = new Node(1);

node1.next = node2;
node2.next = node3;

console.log(node1.data);
console.log(node1.next.data);
console.log(node1.next1.next.data);

let list = new LinkedList();
console.log("=========insertAt() 호출===========");
list.insertAt(0, 1);
list.insertAt(1, 2);
list.insertAt(2, 3);
list.insertAt(3, 4);
list.insertAt();
list.printAll();

list.insertAt(3, 99);
list.insertAll();

console.log("==========clear() 호출============");
list.clear();
list.printAll();

console.log("==========inserLast() 호출============");
list.insertLast(77);
list.insertLast(78);
list.insertLast(79);
list.insertLast(80);

list.printAll();

console.log("===========delete() 호출==================");
list.deleteAt(2);
list.printAll();

list.deleteAt(0);
list.printAll();

list.insertLast(81);
list.insertLast(82);
list.insertLast(83);
list.printAll();


console.log("=================deleteLast() 호출===================");
list.deleteLast();
list.deleteLast();
list.deleteLast();
list.deleteLast();
list.printAll();


list.insertLast(84);
list.insertLast(85);
list.insertLast(86);
list.printAll();

console.log("================getNodeAt() 호출========================");
console.log(list.getNodeAt(1));
console.log(list.getNodeAt(3));