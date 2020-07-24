import {Point, ReferenceSystem} from '..';
import {GeometryTypes} from '../definitions/geometry.types';

export class Line {
    type: GeometryTypes.line;
    coordinates: number[][];
    crs?: ReferenceSystem;
    constructor(coordinates: number[][] | Point[], crs?: ReferenceSystem);
    transform(target: ReferenceSystem);
}
