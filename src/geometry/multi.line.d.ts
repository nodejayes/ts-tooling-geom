import {ReferenceSystem} from '..';
import {Line} from './line';

export class MultiLine {
    type: string;
    coordinates: number[][][];
    crs?: ReferenceSystem;
    constructor(lines: number[][][] | Line[], crs?: ReferenceSystem);
}
