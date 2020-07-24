import {Feature} from './feature';
import {ReferenceSystem} from '..';
import {GeometryTypes} from '../definitions/geometry.types';

export class FeatureCollection {
    type: GeometryTypes.featureCollection;
    features: Feature[];
    constructor(features: Feature[]);
    transform(target: ReferenceSystem);
}
