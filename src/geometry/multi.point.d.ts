import {Point} from './point';
import {ReferenceSystem} from '..';

export class MultiPoint {
    type: string;
    coordinates: number[][];
    constructor(points: number[][] | Point[], crs?: ReferenceSystem);
}
