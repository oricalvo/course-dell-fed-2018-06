function Point(x, y) {
    function dump() {
        console.log(x + ", " + y);
    }

    return {
        dump: dump,
    }
}
