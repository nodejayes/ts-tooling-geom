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

const {Triangle} = require('./vector/triangle');

const {readJson} = require('./io/json/reader');
const {writeJson} = require('./io/json/writer');

const {DistanceTool} = require('./tools/distance');

module.exports = {
    GeometryTypes,
    ReferenceSystem, ReferenceSystemProperties,
    Point, MultiPoint,
    Line, MultiLine,
    Polygon, MultiPolygon,
    Feature, FeatureCollection,
    Triangle,
    readJson, writeJson,
    DistanceTool,
};
