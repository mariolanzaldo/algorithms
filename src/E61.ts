class Point<T> {
    x: number;
    y: number;
    constructor(x: number, y:number) {
        this.x = x;
        this.y = y;
    }
}

class Segment<T> {
    left: Point<T>;
    right: Point<T>;
    constructor(left: Point<T>, right: Point<T>) {
        this.left = left;
        this.right = right;
    }
}

class EventP{
    x: number;
    y: number;
    isLeft: boolean;
    index: number;
    constructor(x: number, y:  number, isLeft: boolean, index: number) {
        this.x = x;
        this.y = y;
        this.isLeft = isLeft;
        this.index = index;
    }

    static compare(a: EventP, b: EventP): number {
        if(a.y === b.y) {
            return a.x - b.x;
        }

        return a.y - b.y;
    }
}

function onSegment(p: Point<number>, q: Point<number>, r: Point<number>): boolean {
    return(
        q.x <= Math.max(p.x, r.x) &&
        q.x >= Math.min(p.x, r.x) &&
        q.y <= Math.max(p.y, r.y) &&
        q.y >= Math.min(p.y, r.y)
    );
};

function orientationP(p: Point<number>, q: Point<number>, r: Point<number>): number {
    const val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
    
    if(val === 0) return 0; //collinear

    return (val > 0)? 1: 2 //clockwise or counterclockwise
};

function doIntersect(s1: Segment<number>, s2: Segment<number>): boolean {
    const p1 = s1.left;
    const q1 = s1.right;
    const p2 = s2.left;
    const q2 = s2.right;

    const o1 = orientationP(p1, q1, p2);
    const o2 = orientationP(p1, q1, q2);
    const o3 = orientationP(p2, q2, p1);
    const o4 = orientationP(p2, q2, q1);

    if(o1 !== o2 && o3 !== o4) return true;

    if(o1 === 0 && onSegment(p1, p2, q1)) return true;
    if(o2 === 0 && onSegment(p1, p2, q1)) return true;

    if(o3 === 0 && onSegment(p2, p1, q2)) return true;
    if(o4 === 0 && onSegment(p2, p1, q2)) return true;

    return false;
};

function intersect(arr: any[], n: number): number {
    const mp = new Map<string, boolean>();
    const e: EventP[] = [];

    for(let i = 0; i < n; i++) {
        e.push(new EventP(arr[i].left.x, arr[i].left.y, true, i));
        e.push(new EventP(arr[i].left.x, arr[i].left.y, false, i));

    }

    e.sort(EventP.compare);

    const activeSegments: any[] = [];
    let ans = 0;

    for(let i = 0; i < 2 * n; i++) {
        const curr = e[i];
        const index = curr.index;

        if(curr.isLeft) {
            for(const activeSegment of activeSegments) {
                if(doIntersect(arr[index], activeSegment)) {
                    const s = `${index + 1} ${activeSegment.index + 1}`;

                    if(!mp.has(s)) {
                        mp.set(s, true);
                        ans++;
                    }
                }
            }

            activeSegments.push(arr[index]);
        } else {
            activeSegments.splice(
                activeSegments.findIndex((segment) => segment === arr[index]), 1
            );
        }
    }

    console.log("Line intersections:");

    for(const [key] of mp) {
        console.log("Line:", key);
    }

    return ans;
};

const arr: any[] = [
    { left: new Point(1, 5), right: new Point(4, 5) },
    { left: new Point(2, 5), right: new Point(10, 1) },
    { left: new Point(3, 2), right: new Point(10, 3) },
    { left: new Point(6, 4), right: new Point(9, 4) },
    { left: new Point(7, 1), right: new Point(8, 1) }
  ];
  const n = arr.length;
  
  console.log("Number of intersection points:", intersect(arr, n));


