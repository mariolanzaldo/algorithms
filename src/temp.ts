// interface Point {
//     x: number;
//     y: number;
//   }
  
//   interface Line {
//     start: Point;
//     end: Point;
//   }
  
//   class Node {
//     line: Line;
//     left: Node | null;
//     right: Node | null;
  
//     constructor(line: Line) {
//       this.line = line;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   class BST {
//     root: Node | null;
  
//     constructor() {
//       this.root = null;
//     }
  
//     insert(line: Line) {
//       if (this.root === null) {
//         this.root = new Node(line);
//       } else {
//         this.insertNode(this.root, line);
//       }
//     }
  
//     private insertNode(node: Node, line: Line) {
//       if (isHorizontalLine(line)) {
//         // Insert horizontal line on the left side
//         if (line.start.x < node.line.start.x) {
//           if (node.left === null) {
//             node.left = new Node(line);
//           } else {
//             this.insertNode(node.left, line);
//           }
//         }
//         // Insert horizontal line on the right side
//         else if (line.start.x > node.line.start.x) {
//           if (node.right === null) {
//             node.right = new Node(line);
//           } else {
//             this.insertNode(node.right, line);
//           }
//         }
//       }
//     }
  
//     remove(line: Line) {
//       this.root = this.removeNode(this.root, line);
//     }
  
//     private removeNode(node: Node | null, line: Line): Node | null {
//       if (node === null) {
//         return null;
//       }
  
//       if (isHorizontalLine(line)) {
//         // Remove horizontal line on the left side
//         if (line.start.x < node.line.start.x) {
//           node.left = this.removeNode(node.left, line);
//         }
//         // Remove horizontal line on the right side
//         else if (line.start.x > node.line.start.x) {
//           node.right = this.removeNode(node.right, line);
//         }
//         // Found the target node to remove
//         else if (line.start.y === node.line.start.y && line.end.y === node.line.end.y) {
//           // Node has no children
//           if (node.left === null && node.right === null) {
//             return null;
//           }
//           // Node has only right child
//           else if (node.left === null) {
//             return node.right;
//           }
//           // Node has only left child
//           else if (node.right === null) {
//             return node.left;
//           }
//           // Node has both left and right children
//           else {
//             const minNode = this.findMinNode(node.right);
//             node.line = minNode.line;
//             node.right = this.removeNode(node.right, minNode.line);
//           }
//         }
//       }
  
//       return node;
//     }
  
//     private findMinNode(node: Node): Node {
//       let current = node;
//       while (current.left !== null) {
//         current = current.left;
//       }
//       return current;
//     }
  
//     findIntersections(lines: Line[]): Point[] {
//       const intersections: Point[] = [];
//       for (const line of lines) {
//         if (isVerticalLine(line)) {
//           const horizontalLines = this.findHorizontalLines(line.start.y, line.end.y);
//           for (const hLine of horizontalLines) {
//             if (isIntersecting(hLine, line.start)) {
//               intersections.push({ x: line.start.x, y: hLine.start.y });
//             }
//           }
//         } else {
//           this.insert(line);
//         }
//       }
//       return intersections;
//     }
  
//     private findHorizontalLines(yStart: number, yEnd: number): Line[] {
//       const horizontalLines: Line[] = [];
//       this.traverseInOrder(this.root, yStart, yEnd, horizontalLines);
//       return horizontalLines;
//     }
  
//     private traverseInOrder(node: Node | null, yStart: number, yEnd: number, horizontalLines: Line[]) {
//       if (node === null) {
//         return;
//       }
  
//       this.traverseInOrder(node.left, yStart, yEnd, horizontalLines);
  
//       if (isHorizontalLine(node.line) && node.line.start.y >= yStart && node.line.start.y <= yEnd) {
//         horizontalLines.push(node.line);
//       }
  
//       this.traverseInOrder(node.right, yStart, yEnd, horizontalLines);
//     }
//   }
  
//   function isVerticalLine(line: Line): boolean {
//     return line.start.x === line.end.x;
//   }
  
//   function isHorizontalLine(line: Line): boolean {
//     return line.start.y === line.end.y;
//   }
  
//   function isIntersecting(hLine: Line, vPoint: Point): boolean {
//     const hLineStart = Math.min(hLine.start.x, hLine.end.x);
//     const hLineEnd = Math.max(hLine.start.x, hLine.end.x);
//     return hLineStart <= vPoint.x && vPoint.x <= hLineEnd;
//   }
  
//   // Example usage
//   const lines: Line[] = [
//     { start: { x: 1, y: 2 }, end: { x: 6, y: 2 } },
//     { start: { x: 3, y: 1 }, end: { x: 3, y: 5 } },
//     { start: { x: 2, y: 3 }, end: { x: 5, y: 3 } },
//     { start: { x: 4, y: 1 }, end: { x: 4, y: 4 } },
//   ];
  
//   const bst = new BST();
//   const intersections = bst.findIntersections(lines);
//   console.log(intersections);