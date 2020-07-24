import {ReferenceSystem} from '..';
import {GeometryTypes} from '../definitions/geometry.types';

export class Point {
    type: GeometryTypes.point;
    coordinates: number[];
    crs?: ReferenceSystem;
    constructor(coordinate: number[], crs?: any);
    transform(target: ReferenceSystem);
}
