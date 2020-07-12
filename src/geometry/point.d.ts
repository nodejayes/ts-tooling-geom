import {ReferenceSystem} from '..';

export class Point {
    type: string;
    coordinates: number[];
    crs?: ReferenceSystem;

    constructor(coordinate: number[], crs?: any);
}
