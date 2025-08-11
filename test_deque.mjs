import { Deque } from "./DoubleLinkedList.mjs";

let deque = new Deque();

console.log("============ addFirst ===========");
// 큐가 비었는지 출력 (처음에는 비어있음)
console.log(`isEmpty : ${deque.isEmpty()}`);

// addFirst로 5개의 원소를 앞에 차례로 추가
deque.addFirst(1);
deque.addFirst(2);
deque.addFirst(3);
deque.addFirst(4);
deque.addFirst(5);

// 현재 상태 출력
deque.printAll();

// 큐가 비었는지 다시 확인
console.log(`isEmpty : ${deque.isEmpty()}`);
console.log("\n");

console.log("============ removeFirst ===========");
// removeFirst로 앞에서부터 원소 제거 및 상태 출력 반복
deque.removeFirst();
deque.printAll();

deque.removeFirst();
deque.printAll();

deque.removeFirst();
deque.printAll();

deque.removeFirst();
deque.printAll();

deque.removeFirst();
deque.printAll();

// 모두 제거된 후 빈 상태 확인
console.log(`isEmpty : ${deque.isEmpty()}`);
console.log("\n");

console.log("============ addLast ===========");
// addLast로 5개의 원소를 뒤에 차례로 추가
deque.addLast(1);
deque.addLast(2);
deque.addLast(3);
deque.addLast(4);
deque.addLast(5);

// 현재 상태 출력
deque.printAll();

// 큐가 비었는지 확인
console.log(`isEmpty : ${deque.isEmpty()}`);
console.log("\n");

console.log("============ removeLast ===========");
// removeLast로 뒤에서부터 원소 제거 및 상태 출력 반복
deque.removeLast();
deque.printAll();

deque.removeLast();
deque.printAll();

deque.removeLast();
deque.printAll();

deque.removeLast();
deque.printAll();

deque.removeLast();
deque.printAll();

// 모두 제거된 후 빈 상태 확인
console.log(`isEmpty : ${deque.isEmpty()}`);
console.log("\n");