const {GeometryTypes} = require('./definitions/geometry.types');
const {ReferenceSystem, ReferenceSystemProperties} = require('./reference_system/reference.system');
const {Point} = require('./geometry/point');
const {MultiPoint} = require('./geometry/multi.point');
const {Line} = require('./geometry/line');
const {MultiLine} = require('./geometry/multi.line');
const {Polygon} = require('./geometry/polygon');
const {MultiPolygon} = require('./geometry/multi.polygon');
const {Feature} = require('./geometry/feature');
const {FeatureCollection} = require('./geometry/feature.collection');

const {readJson} = require('./io/json/reader');
const {writeJson} = require('./io/json/writer');

module.exports = {
    GeometryTypes,
    ReferenceSystem, ReferenceSystemProperties,
    Point, MultiPoint,
    Line, MultiLine,
    Polygon, MultiPolygon,
    Feature, FeatureCollection,
    readJson, writeJson
};
