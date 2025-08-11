import { Stack } from "./Stack.mjs"

// 배열로 stack 구현 (참고용)
// let stack = [];
// stack.push(1);   // 배열 끝에 값 추가
// stack.push(2);
// stack.push(3);
// stack.push(4);
// console.log(stack);
// stack.push(5);
// console.log(stack);

// console.log(stack.pop());  // 배열 끝에서 값 제거 및 반환
// console.log(stack.pop());
// console.log(stack.pop());

// console.log(stack);

// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

// 연결리스트로 stack 구현
let stack = new Stack();    // Stack 클래스 인스턴스 생성
console.log("======첫번째 출력======");
stack.push(1);              // 스택에 1 추가
stack.push(2);              // 스택에 2 추가
stack.push(3);              // 스택에 3 추가
stack.push(4);              // 스택에 4 추가

// pop() 호출 후 반환된 노드가 null이 아닐 때 data 출력 (안전하게)
console.log(stack.pop()?.data);
console.log(stack.pop()?.data);
console.log(stack.pop()?.data);
console.log(stack.pop()?.data);
// console.log(stack.pop()); // 더 이상 요소 없으면 null 반환

console.log("=====두번째 출력=====");
stack.push("일");           // 스택에 "일" 추가
stack.push("이");           // 스택에 "이" 추가
stack.push("삼");           // 스택에 "삼" 추가
stack.push("사");           // 스택에 "사" 추가

console.log(stack.peek());  // 스택 최상단 값 출력 (삭제하지 않음)
stack.pop();                // 최상단 값 제거
console.log(stack.peek());  // 현재 최상단 값 출력

stack.pop();                // 두 번 더 제거
stack.pop();

console.log(stack.peek());  // 현재 최상단 값 출력

// 스택이 비었는지 여부 출력 (템플릿 리터럴 사용)
console.log(`isEmpty : ${stack.isEmpty()}`);

// stack.pop(); // 더 이상 요소 없으면 null 반환