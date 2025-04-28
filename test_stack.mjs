import {Stack} from "./Stack.mjs"

//배열로 stack 구현
//let stack = [];
//stack.push(1);
//stack.push(2);
//stack.push(3);
//stack.push(4);
//console.log(stack);
//stack.push(5);
//console.log(stack);

//console.log(stack.pop());
//console.log(stack.pop());
//console.log(stack.pop());

//console.log(stack);

//console.log(stack.pop());
//console.log(stack.pop());
//console.log(stack.pop());

//연결리스트로 stack 구현
let stack = new stack();
console.log("======첫번째 출력======");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
//console.log(stack.pop());


console.log("=====두번째 출력=====");
stack.push("일");
stack.push("이");
stack.push("삼");
stack.push("사");

console.log(stack.peek());
stack.pop();
console.log(stack.peek());

stack.pop();
stack.pop();

console.log(stack.peek());
console.log("isEmpty : ${Stack isEmpty()}");

//stack.pop();