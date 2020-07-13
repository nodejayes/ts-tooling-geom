require('ts-tooling');

class MultiLine {
    get type() {
        return 'MultiLineString';
    }

    constructor(lines, crs) {
        this.coordinates = lines;
        this.crs = crs || null;
        if (Array.isArray(lines) && lines.Any() && lines.ElementAt(0).coordinates) {
            this.coordinates = lines.Convert(l => l.coordinates);
            if (lines.ElementAt(0).crs) {
                this.crs = lines.ElementAt(0).crs;
            }
        }
    }
}

module.exports = {MultiLine};
