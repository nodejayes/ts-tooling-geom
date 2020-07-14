class Feature {
    get type() {
        return 'Feature';
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
