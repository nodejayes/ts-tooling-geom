import {Line, ReferenceSystem} from '..';

export class Polygon {
    type: string;
    coordinates: number[][][];
    crs?: ReferenceSystem;
    constructor(rings: number[][][] | Line[], crs?: ReferenceSystem);
    transform(target: ReferenceSystem);
}
