import Node from "./utils/Node";

class BST {
    public root: Node<number> | null;

    constructor() {
        this.root = null;
    }

    public insert(value: any): void {
        if (!this.root) {
            this.root = new Node(value);
        } else {
            let current = this.root;
  
            while (true) {
                if (current.value > value) {
                    if (current.left) {
                        current = current.left;
                    } else {
                        current.left = new Node(value);
                        break;
                    }
                } else {
                    if (current.right) {
                        current = current.right;
                    } else {
                        current.right = new Node(value);
                        break;
                    }
                }
            }
        }
    }

    public isOnTree(value: any): boolean {
        return this.searchNode(this.root, value);
    }

    private searchNode(node: Node<number> | null, value: any): boolean {
        if(!node) {
            return false;
        } else if(value === node.value) {
            return true;
        } else if (value < node.value) {
            return this.searchNode(node.left, value);
        } else {
           return this.searchNode(node.right, value);
        }
    }
  
    public remove(value: any): void {
        this.root = this.removeNode(this.root, value);
    } 

    private removeNode(node: Node<number> | null, key: any): Node<number> | null {
        if(!node) {
            return null;
        } else if(key < node.value) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if(key > node.value) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if(!node.left && !node.right) {
                node = null;
                return node;
            }

            if(!node.left) {
                node = node.right;
                return node;
            } else if(!node.right) {
                node = node.left;
                return node;
            }

            const aux = this.findMinNode(node.right);
            node.value = aux.value;

            node.right = this.removeNode(node.right, aux.value);
            return node;
        }
    }

    private findMinNode(node: Node<number>): Node<number> {
        if(node.left) {
            return this.findMinNode(node.left);
        } else {
            return node;
        }
    }
};

export default BST;