class ReferenceSystemProperties {
    constructor(srid) {
        this.name = `EPSG:${srid}`;
    }
}

class ReferenceSystem {
    get type() {
        return 'name';
    }

    constructor(srid) {
        this.properties = new ReferenceSystemProperties(srid);
    }
}

module.exports = {ReferenceSystem};
