class Node <T>{
    value: any;
    left: any;
    right: any;
    constructor(item: any) {
        this.left = null;
        this.right = null;
        this.value = item;
    }
};

export default Node;