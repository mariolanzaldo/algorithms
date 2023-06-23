export class Node <T> {
    value: T;
    next: Node<T> | null;
    constructor(data: T) {
      this.value = data;
      this.next = null
    }
  }
  export class LinkedList<T>{
    head: any;
    length: number;
    constructor() {
      this.head   = null;
      this.length = 0;
    }
    
    add(value: number) {
      const nodeToAdd = new Node(value);
      let nodeToCheck = this.head;
        if(!nodeToCheck) {
            this.head = nodeToAdd;
            this.length++;
            return nodeToAdd;
        }
        while(nodeToCheck.next) {
            nodeToCheck = nodeToCheck.next;
        }

        nodeToCheck.next = nodeToAdd;
        this.length++;

        return nodeToAdd;
    }

  getNode(num: number) {
      let nodeToCheck = this.head;
      let count = 0;
      
      if(num > this.length) throw new Error("Doesn't Exist!");
      
      while(count < num) {
        nodeToCheck = nodeToCheck.next;
        count++;
      }
      
      return nodeToCheck;
    }

  removeNode(num: number) {
      let nodeToCheck = this.head,
          count       = 0,
          prevNode    = null;
      
      if(num > length) throw new Error("Doesn't Exist!");
      
      if(num === 0) {
        this.head = nodeToCheck.next;
        this.length--;
        
        return this.head;
      }
      
      while(count < num) {
        prevNode = nodeToCheck;
        nodeToCheck = nodeToCheck.next;
        count++;
      }
      
      prevNode.next = nodeToCheck.next;
      nodeToCheck = null;
      this.length--;
      
      return this.head;
    }
    
    makeLoop (head: any, k: number) {
      let temp = head;
      let count = 1;
      while(count < k) {
          temp = temp.next;
          count++;
      }
  
      const jointPoint = temp;
  
      while(temp.next != null) {
          temp = temp.next;
      }
  
      temp.next = jointPoint;
  
      return head;
    };
  }
