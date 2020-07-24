const {ObjectFactory} = require('ts-tooling');

const GeometryTypes = ObjectFactory.Freeze({
    point: 'Point',
    line: 'LineString',
    polygon: 'Polygon',
    multiPoint: 'MultiPoint',
    multiLine: 'MultiLineString',
    multiPolygon: 'MultiPolygon',
    feature: 'Feature',
    featureCollection: 'FeatureCollection',
});

module.exports = {GeometryTypes};
