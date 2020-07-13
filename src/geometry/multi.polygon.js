class MultiPolygon {
    get type() {
        return 'MultiPolygon';
    }

    constructor(polygons, crs) {
        this.coordinates = polygons;
        this.crs = crs || null;
        if (Array.isArray(polygons) && polygons.Any() && polygons.ElementAt(0).coordinates) {
            this.coordinates = polygons.Convert(p => p.coordinates);
            if (polygons.ElementAt(0).crs) {
                this.crs = polygons.ElementAt(0).crs;
            }
        }
    }
}

module.exports = {MultiPolygon};
