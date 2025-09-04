import { BirnaryTree } from "./binaryTree.mjs";

let tree1 = new BirnaryTree(1);
let tree2 = new BirnaryTree(2);
let tree3 = new BirnaryTree(3);
let tree4 = new BirnaryTree(4);
let tree5 = new BirnaryTree(5);
let tree6 = new BirnaryTree(6);
let tree7 = new BirnaryTree(7);

tree1.setLeftSubTree(tree2);
tree1.setRightSubTree(tree3);
tree2.setLeftSubTree(tree4);0
tree2.setRightSubTree(tree5);
tree3.setLeftSubTree(tree6);
tree3.setRightSubTree(tree7);

 