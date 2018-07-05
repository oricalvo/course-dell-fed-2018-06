var hashCode = (function() {
    var nextHashCode = 1000;
    var MAGIC_FIELD = "##HASHCODE##";

    function getHashCode(obj) {
        var hashCode = obj[MAGIC_FIELD];
        if(!hashCode) {
            hashCode = obj[MAGIC_FIELD] = nextHashCode++;
        }

        return hashCode;
    }

    return {
        get: getHashCode,
    };
})();
