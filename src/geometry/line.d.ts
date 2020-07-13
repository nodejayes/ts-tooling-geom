import {Point, ReferenceSystem} from '..';

export class Line {
    type: string;
    coordinates: number[][];
    crs?: ReferenceSystem;
    constructor(coordinates: number[][] | Point[], crs?: ReferenceSystem);
}
