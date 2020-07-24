import {Point} from './point';
import {ReferenceSystem} from '..';
import {GeometryTypes} from '../definitions/geometry.types';

export class MultiPoint {
    type: GeometryTypes.multiPoint;
    coordinates: number[][];
    crs?: ReferenceSystem;
    constructor(points: number[][] | Point[], crs?: ReferenceSystem);
    transform(target: ReferenceSystem);
}
