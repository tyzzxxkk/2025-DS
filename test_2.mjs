import {Node, LinkedList} from './LinkedList.mjs'

let node1 = new Node(1);
let node2 = new Node(1);
let node3 = new Node(1);

node1.next = node2;
node2.next = node3;

console.log(node1.data);
console.log(node1.next.data);