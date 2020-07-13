import {ReferenceSystem} from '..';
import {Polygon} from './polygon';

export class MultiPolygon {
    type: string;
    coordinates: number[][][][];
    crs?: ReferenceSystem;
    constructor(polygons: number[][][][] | Polygon[], crs?: ReferenceSystem);
}
