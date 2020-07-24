import {Feature, Geometry} from '../../geometry/feature';
import {FeatureCollection} from '../../geometry/feature.collection';

export function writeJson(data: Geometry | Feature | FeatureCollection): string;
