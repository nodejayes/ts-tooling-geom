import {Feature} from './feature';
import {ReferenceSystem} from '..';

export class FeatureCollection {
    type: string;
    features: Feature[];
    constructor(features: Feature[]);
    transform(target: ReferenceSystem);
}
