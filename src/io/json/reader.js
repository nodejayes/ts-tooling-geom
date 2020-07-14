const {Point} = require('../../geometry/point');
const {Line} = require('../../geometry/line');
const {Polygon} = require('../../geometry/polygon');
const {MultiPoint} = require('../../geometry/multi.point');
const {MultiLine} = require('../../geometry/multi.line');
const {MultiPolygon} = require('../../geometry/multi.polygon');
const {Feature} = require('../../geometry/feature');
const {FeatureCollection} = require('../../geometry/feature.collection');
const {ReferenceSystem} = require('../../reference_system/reference.system');
const {NumberFactory} = require('ts-tooling');

function read(stream) {
    const data = JSON.parse(stream);
    const crs = parseCrs(data.crs);
    switch(data.type) {
        case 'Point':
            return new Point(data.coordinates, crs);
        case 'LineString':
            return new Line(data.coordinates, crs);
        case 'Polygon':
            return new Polygon(data.coordinates, crs);
        case 'MultiPoint':
            return new MultiPoint(data.coordinates, crs);
        case 'MultiLineString':
            return new MultiLine(data.coordinates, crs);
        case 'MultiPolygon':
            return new MultiPolygon(data.coordinates, crs);
        case 'Feature':
            return new Feature(data.geometry, data.properties);
        case 'FeatureCollection':
            return new FeatureCollection(data.features);
        default:
            throw new Error(`not supported format for ${stream}`);
    }
}

function parseCrs(crs) {
    // TODO: parse other Coordinate System definitions
    if (crs && crs.properties && crs.properties.name) {
        return new ReferenceSystem(NumberFactory.NewInteger(crs.properties.name.TrimStart('EPSG:')));
    }
    return undefined;
}

module.exports = {readJson: read};
