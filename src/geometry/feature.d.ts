import {Polygon} from './polygon';
import {Line} from './line';
import {Point} from './point';
import {MultiPoint} from './multi.point';
import {MultiLine} from './multi.line';
import {MultiPolygon} from './multi.polygon';
import {ReferenceSystem} from '..';

export type Geometry = Polygon | Line | Point | MultiPoint | MultiLine | MultiPolygon;

export class Feature {
    type: string;
    geometry: Geometry;
    properties: {[key: string]: any};
    constructor(geometry: Geometry, properties?: {[key: string]: any});
    transform(target: ReferenceSystem);
}
