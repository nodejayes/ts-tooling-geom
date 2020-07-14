require('ts-tooling');

class FeatureCollection {
    get type() {
        return 'FeatureCollection';
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
