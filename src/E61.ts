export class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
};

export class Segment {
  start: Point;
  end: Point;
  constructor(start: Point, end: Point) {
    this.start = start;
    this.end = end;
  }
};

class EventP {
  point: Point;
  isStart: boolean;
  segment: Segment;

  constructor(point: Point, isStart: boolean, segment: Segment) {
    this.point = point;
    this.isStart = isStart;
    this.segment = segment;
  }
};

function findSegmentIntersection(segments: any): any {
  const eventQueue: EventP[] = [];
  
  for(const segment of segments) {
    eventQueue.push(new EventP(segment.start, true, segment));
    eventQueue.push(new EventP(segment.end, false, segment));

  }

  eventQueue.sort((eventA, eventB) => eventA.point.x - eventB.point.x);

  const sweepLine: Segment[]=[];
  const intersections:Segment[][] = [];

  while(eventQueue.length > 0) {
    const event = eventQueue.shift();
    const segment = event?.segment;

    if(event && segment && event.isStart) {
      sweepLine.push(segment);
      const index = sweepLine.indexOf(segment);

      if(index > 0) {
        checkForIntersect(segment, sweepLine[index - 1], intersections);
      }

      if(index < sweepLine.length - 1) {
        checkForIntersect(segment, sweepLine[index + 1], intersections);
      }
    } else {
      const index = segment ? sweepLine.indexOf(segment) : -1;
      const prev = sweepLine[index - 1];
      const next = sweepLine[index + 1];

      if(prev && next) {
        checkForIntersect(prev, next, intersections);
      }

      sweepLine.splice(index, 1);

    }
  }

  return intersections;
};

function checkForIntersect(segment1: Segment, segment2: Segment, intersections: Segment[][]): Segment[][] {
  if(segment1 && segment2 && doIntersect(segment1, segment2)) {
    intersections.push([segment1, segment2]);
  }

  return intersections;
};

function doIntersect(segment1: Segment, segment2: Segment): boolean {
  const p1 = segment1.start;
  const q1 = segment1.end;
  const p2 = segment2.start;
  const q2 = segment2.end;

  const orientation1 = getOrientation(p1, q1, p2);
  const orientation2 = getOrientation(p1, q1, q2);
  const orientation3 = getOrientation(p2, q2, p1);
  const orientation4 = getOrientation(p2, q2, q1);

  if (
    (orientation1 !== orientation2 && orientation3 !== orientation4) ||
    (orientation1 === 0 && onSegment(p1, p2, q1)) ||
    (orientation2 === 0 && onSegment(p1, q2, q1)) ||
    (orientation3 === 0 && onSegment(p2, p1, q2)) ||
    (orientation4 === 0 && onSegment(p2, q1, q2))
  ) {
    return true;
  }

  return false;
};

function getOrientation(p: Point, q: Point, r: Point): number {
  const val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);

  if(val === 0) return 0;

  return val > 0 ? 1: 2;
};

function onSegment(p: Point, q: Point, r: Point): boolean {
  return (
    q.x <= Math.max(p.x, r.x) &&
    q.x >= Math.min(p.x, r.x) &&
    q.y <= Math.max(p.y, r.y) &&
    q.y >= Math.min(p.y, r.y)
  );
};

export default findSegmentIntersection;

