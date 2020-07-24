function pythagorasLength(l1, l2) {
    return Math.sqrt(Math.pow(l1, 2) + Math.pow(l2, 2));
}

function pythagoras(ax, ay, bx, by) {
    return pythagorasLength(ax - bx, ay - by);
}

module.exports = {pythagoras, pythagorasLength};
