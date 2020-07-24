const {GeometryTypes} = require('../../definitions/geometry.types');

function write(geometry) {
    const selected = [geometry].Convert(g => {
        if (typeof g.type !== typeof '') {
            return null;
        }
        switch (g.type) {
            case GeometryTypes.point:
            case GeometryTypes.line:
            case GeometryTypes.polygon:
            case GeometryTypes.multiPoint:
            case GeometryTypes.multiLine:
            case GeometryTypes.multiPolygon:
                return parseGeometry(g);
            case GeometryTypes.feature:
                return parseFeature(g);
            case GeometryTypes.featureCollection:
                return parseFeatureCollection(g);
        }
    }).FirstOrDefault();
    return JSON.stringify(selected);
}

function parseFeatureCollection(fc) {
    const tmp = {
        type: fc.type,
        features: [],
    };
    for (const f of fc.features) {
        tmp.features.Add(parseFeature(f));
    }
    return tmp;
}

function parseFeature(f) {
    return {
        type: f.type,
        geometry: parseGeometry(f.geometry),
        properties: f.properties || null,
    };
}

function parseGeometry(g) {
    const tmp = {
        type: g.type,
        coordinates: g.coordinates,
    }
    if (g.crs) {
        tmp.crs = {
            type: 'name',
            properties: g.crs.properties,
        };
    }
    return tmp;
}

module.exports = {writeJson: write};
