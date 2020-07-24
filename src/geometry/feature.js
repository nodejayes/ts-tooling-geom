const {GeometryTypes} = require('../definitions/geometry.types');

class Feature {
    get type() {
        return GeometryTypes.feature;
    }

    constructor(geometry, properties) {
        this.geometry = geometry;
        this.properties = properties || null;
    }

    transform(target) {
        this.geometry.transform(target);
    }
}

module.exports = {Feature};
