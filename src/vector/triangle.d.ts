import {Point} from '../geometry/point';

export class Triangle {
    a: number[];
    b: number[];
    c: number[];
    get edgeCB(): number;
    get edgeAC(): number;
    get edgeAB(): number;
    get angleAlpha(): number;
    get angleBeta(): number;
    get angleGamma(): number;
    get diameter(): number;
    get radius(): number;
    get scope(): number;
    constructor(ptA: Point, ptB: Point, ptC: Point);
    heightFrom(point: 'A' | 'B' | 'C'): number;
    shortestDistance(point: 'A' | 'B' | 'C'): number;
}
