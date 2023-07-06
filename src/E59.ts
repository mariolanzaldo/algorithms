class AVLTreeNode<T> {
  value: T;
  left: AVLTreeNode<T> | null;
  right: AVLTreeNode<T> | null;
  parent: AVLTreeNode<T> | null;
  height: number;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.height = 0;
  }
}

class AVLTree<T> {
  root: AVLTreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  public insert(value: T) {
    const insertHelper = (node: AVLTreeNode<T> | null, parent: AVLTreeNode<T> | null = null): AVLTreeNode<T> => {
      if (!node) {
        const newNode = new AVLTreeNode(value);
        newNode.parent = parent;
        return newNode;
      }

      if (value < node.value) {
        node.left = insertHelper(node.left, node);
      } else if (value > node.value) {
        node.right = insertHelper(node.right, node);
      }

      this.updateHeight(node);
      return this.balance(node);
    };

    this.root = insertHelper(this.root);
    if (this.root && this.root.parent) {
      this.root.parent = null;
    }
  }

  public delete(value: T) {
    const deleteNode = (value: T, node: AVLTreeNode<T> | null): AVLTreeNode<T> | null => {
      if (!node) {
        return null;
      }

      if (value < node.value) {
        node.left = deleteNode(value, node.left);
      } else if (value > node.value) {
        node.right = deleteNode(value, node.right);
      } else {
        if (!node.left && !node.right) {
          return null;
        } else if (node.right && !node.left) {
          node.right.parent = node.parent;
          return node.right;
        } else if (node.left && !node.right) {
          node.left.parent = node.parent;
          return node.left;
        } else {
            if(node.right) {
                const successor = this.findMin(node.right);
                node.value = successor.value;
                node.right = deleteNode(successor.value, node.right);
            }
        }
      }

      this.updateHeight(node);
      return this.balance(node);
    };

    this.root = deleteNode(value, this.root);
    if (this.root && this.root.parent) {
      this.root.parent = null;
    }
  }

  public search(value: T, node: AVLTreeNode<T> | null = this.root): AVLTreeNode<T> | false {
    if (!node) {
      return false;
    }

    if (value === node.value) {
      return node;
    }

    if (value < node.value) {
      return this.search(value, node.left);
    }

    return this.search(value, node.right);
  }

  private balance(node: AVLTreeNode<T>): AVLTreeNode<T> {
    if (!node) {
      return node;
    }

    const nodeBF = this.getBalanceFactor(node);

    if (nodeBF > 1) {
      if (this.getBalanceFactor(node.left!) < 0) {
        return this.leftRightRotation(node);
      }
      return this.rightRotation(node);
    } else if (nodeBF < -1) {
      if (this.getBalanceFactor(node.right!) > 0) {
        return this.rightLeftRotation(node);
      }
      return this.leftRotation(node);
    }

    return node;
  }

  private updateHeight(node: AVLTreeNode<T>) {
    const leftSubtreeHeight = this.getNodeHeight(node.left);
    const rightSubtreeHeight = this.getNodeHeight(node.right);

    node.height = Math.max(leftSubtreeHeight, rightSubtreeHeight) + 1;
  }

  private getNodeHeight(node: AVLTreeNode<T> | null): number {
    if (!node) {
      return -1;
    }
    return node.height;
  }

  private getBalanceFactor(node: AVLTreeNode<T> | null): number {
    if (!node) {
      return 0;
    }
    return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
  }

  private rightRotation(node: AVLTreeNode<T>): AVLTreeNode<T> {
    const newRoot = node.left!;
    const subtree = newRoot.right;

    newRoot.right = node;
    node.left = subtree;

    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  private leftRotation(node: AVLTreeNode<T>): AVLTreeNode<T> {
    const newRoot = node.right!;
    const subtree = newRoot.left;

    newRoot.left = node;
    node.right = subtree;

    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  private leftRightRotation(node: AVLTreeNode<T>): AVLTreeNode<T> {
    node.left = this.leftRotation(node.left!);
    return this.rightRotation(node);
  }

  private rightLeftRotation(node: AVLTreeNode<T>): AVLTreeNode<T> {
    node.right = this.rightRotation(node.right!);
    return this.leftRotation(node);
  }

  private findMin(node: AVLTreeNode<T>): AVLTreeNode<T> {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  public printTopToBottom (): string {
    let str = '';
    const queue: any[] = [];

    const printTopOrder = (node: AVLTreeNode<T> | null) => {
        if(node !== null) {
            str += node.value + " ";
        }

        if(node?.left !== null) {
            queue.push(node?.left);
        }

        if(node?.right !== null) {
            queue.push(node?.right);
        }

        while(queue && queue.length > 0) {
            let node = queue.shift();
            printTopOrder(node);
        }
    };
    printTopOrder(this.root);
    return str;
  }

};

export default AVLTree;