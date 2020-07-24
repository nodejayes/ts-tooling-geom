import {ReferenceSystem} from '..';
import {Line} from './line';
import {GeometryTypes} from '../definitions/geometry.types';

export class MultiLine {
    type: GeometryTypes.multiLine;
    coordinates: number[][][];
    crs?: ReferenceSystem;
    constructor(lines: number[][][] | Line[], crs?: ReferenceSystem);
    transform(target: ReferenceSystem);
}
