import {Point} from './point';
import {ReferenceSystem} from '..';

export class MultiPoint {
    type: string;
    coordinates: number[][];
    crs?: ReferenceSystem;
    constructor(points: number[][] | Point[], crs?: ReferenceSystem);
    transform(target: ReferenceSystem);
}
