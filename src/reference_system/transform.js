const proj4 = require('proj4');
require('ts-tooling');

const WGS84 = '+proj=longlat +datum=WGS84 +no_defs';
const PseudoMercator = '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs';
const EPSG = {};

function fillSystems() {
    EPSG[4326] = WGS84;
    EPSG[3857] = PseudoMercator;
}

function reproject(target, source, points) {
    return points.Convert(point => proj4(target, source, point));
}

function getEpsg(srid) {
    if (!Object.keys(EPSG).Any()) {
        fillSystems();
    }
    return EPSG[srid];
}

function register(srid, def) {
    EPSG[srid] = def;
}

module.exports = {
    register, getEpsg, reproject
};
