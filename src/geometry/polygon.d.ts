import {Line, ReferenceSystem} from '..';
import {GeometryTypes} from '../definitions/geometry.types';

export class Polygon {
    type: GeometryTypes.polygon;
    coordinates: number[][][];
    crs?: ReferenceSystem;
    constructor(rings: number[][][] | Line[], crs?: ReferenceSystem);
    transform(target: ReferenceSystem);
}
