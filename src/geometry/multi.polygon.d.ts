import {ReferenceSystem} from '..';
import {Polygon} from './polygon';
import {GeometryTypes} from '../definitions/geometry.types';

export class MultiPolygon {
    type: GeometryTypes.multiPolygon;
    coordinates: number[][][][];
    crs?: ReferenceSystem;
    constructor(polygons: number[][][][] | Polygon[], crs?: ReferenceSystem);
    transform(target: ReferenceSystem);
}
