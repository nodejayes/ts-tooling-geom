const {NumberFactory} = require('ts-tooling');

class ReferenceSystemProperties {
    constructor(srid) {
        this.name = `EPSG:${srid}`;
    }
}

class ReferenceSystem {
    get type() {
        return 'name';
    }

    get srId() {
        return NumberFactory.NewInteger(this.properties.ReplaceAll('EPSG:', ''))
    }

    constructor(srid) {
        this.properties = new ReferenceSystemProperties(srid);
    }
}

module.exports = {ReferenceSystem};
