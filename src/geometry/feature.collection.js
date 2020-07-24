const {GeometryTypes} = require('../definitions/geometry.types');
require('ts-tooling');

class FeatureCollection {
    get type() {
        return GeometryTypes.featureCollection;
    }

    constructor(features) {
        this.features = features;
    }

    transform(target) {
        for (const f of this.features) {
            f.transform(target);
        }
    }
}

module.exports = {FeatureCollection};
