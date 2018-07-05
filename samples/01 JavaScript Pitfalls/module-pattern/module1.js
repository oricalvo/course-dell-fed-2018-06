var module1 = (function() {

    function log() {
        console.log("yyy");
    }

    function doSomething() {
        log();
    }

    return {
        doSomething: doSomething,
    };
})();
