var lib = (function() {
    var data;

    function log(message) {
        console.log("lib " + message);
    }

    function doSomething() {
        log("doSomething");
    }

    function doAnotherThing() {
    }

    return {
        doSomething: doSomething,
        doAnotherThing: doAnotherThing,
    };
})();

