import BST from "./E57";
import Node from "./utils/Node";


export default class AVL extends BST {

    constructor() {
        super();
    }

    public find(node: Node<number> | null, value: any): any {
        if(!node) {
            node = this.root;
        } else if(value === node.value) {
            return node;
        } else if (value < node.value) {
            if(!node.left) {
                return;
            }
            return this.find(node.left, value);
        } else if (value > node.value){

            if(!node.left) {
                return;
            }
           return this.find(node.right, value);
        }
    }
}