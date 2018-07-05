function ObjectPool() {
    var map = {};
    var count = 0;

    function add(obj) {
        var code = hashCode.get(obj);
        if(map[code]) {
            return;
        }

        map[code] = obj;
        ++count;
    }

    function get() {
        for(var key in map) {
            var obj = map[key];
            delete map[key];
            --count;
            return obj;
        }
    }

    function getCount() {
        return count;
    }

    return {
        add: add,
        get: get,
        count: getCount,
    };
}
