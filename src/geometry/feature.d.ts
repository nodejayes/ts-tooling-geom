import {Polygon} from './polygon';
import {Line} from './line';
import {Point} from './point';
import {MultiPoint} from './multi.point';
import {MultiLine} from './multi.line';
import {MultiPolygon} from './multi.polygon';
import {ReferenceSystem} from '..';
import {GeometryTypes} from '../definitions/geometry.types';

export type Geometry = Polygon | Line | Point | MultiPoint | MultiLine | MultiPolygon;

export class Feature {
    type: GeometryTypes.feature;
    geometry: Geometry;
    properties: {[key: string]: any};
    constructor(geometry: Geometry, properties?: {[key: string]: any});
    transform(target: ReferenceSystem);
}
