import {Feature, Geometry} from '../../geometry/feature';
import {FeatureCollection} from '../../geometry/feature.collection';

export function readJson(stream: string): Geometry | Feature | FeatureCollection;
