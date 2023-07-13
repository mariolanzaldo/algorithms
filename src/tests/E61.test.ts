import { Point, Segment } from "../E61";
import findSegmentIntersection from "../E61";

test("Basic test", () => {

    const segments = [
        new Segment(new Point(1, 5), new Point(4, 5)),
        new Segment(new Point(2, 5), new Point(10, 1)),
        new Segment(new Point(3, 2), new Point(10, 3)),
        new Segment(new Point(6, 4), new Point(9, 4)),
        new Segment(new Point(7, 1), new Point(8, 1)),
      ];


    const output = findSegmentIntersection(segments);

    const exp = [ [ { start: { x: 2, y: 5 }, end: { x: 10, y: 1 } }, { start: { x: 1, y: 5 }, end: { x: 4, y: 5 } } ],
          [ { start: { x: 3, y: 2 }, end: { x: 10, y: 3 } }, { start: { x: 2, y: 5 }, end: { x: 10, y: 1 } } ] ];
    expect(output).toHaveLength(2);
    expect(output).toEqual(exp);
});