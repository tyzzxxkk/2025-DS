import { Queue } from "./Queue.mjs"

let queue = new Queue();
console.log("====== enqueue() 네번 호출 ========")
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue);

console.log(queue.front().data);

console.log*("======dequeue() 네번 호출======")
console.log(queue.dequeue().data);
console.log(queue.dequeue().data);
console.log(queue.dequeue().data);
console.log(queue.dequeue().data);
console.log(queue);