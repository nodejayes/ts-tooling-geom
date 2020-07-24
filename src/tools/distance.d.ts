import {Point} from '../geometry/point';

export class DistanceTool {
    sphericalTriangle(pt1: Point, pt2: Point): number;
    haversine(pt1: Point, pt2: Point): number;
    planar(pt1: Point, pt2: Point): number;
}
