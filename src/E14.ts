interface Point {
    path: number[];
    x: number;
    y: number;
}

class Point implements Point {
    constructor(path: number[], x: number, y: number){
        this.path = path.slice();
        this.x = x;
        this.y = y;
    }
}
 
function findRoutes(maze: number[][]) {
    const n = maze.length;
    const m = maze[0].length;
 
    let queue = [];
    queue.push(new Point([maze[0][0]], 0, 0));

    const paths = [];
 
    while (queue.length != 0) {
        let point: any = queue.shift();
 
        if (point.x == n - 1 && point.y == m - 1) {
            const path = [...point.path];
           
            paths.push(path);
        } else if (point.x == n - 1) {
            let temp = [...point.path];
 
            temp.push(maze[point.x][point.y + 1]);
            queue.push(new Point(temp, point.x, point.y + 1));
        } else if (point.y == m - 1) {
            let temp = [...point.path];

            temp.push(maze[point.x + 1][point.y]);
            queue.push(new Point(temp, point.x + 1, point.y));
        } else { 
            let temp = [...point.path];
 
            temp.push(maze[point.x][point.y + 1]);
            queue.push(new Point(temp, point.x, point.y + 1));
 
            temp.pop();

            temp.push(maze[point.x + 1][point.y]);
            queue.push(new Point(temp, point.x + 1, point.y));
        }
    }

    return paths;
}


export default findRoutes;