var Timer = /** @class */ (function () {
    function Timer() {
        var _this = this;
        this.onTick = function () {
            console.log("tick", _this.id);
        };
        this.id = 123;
    }
    Timer.prototype.start = function () {
        setInterval(this.onTick, 1500);
    };
    return Timer;
}());
var t = new Timer();
t.start();
//# sourceMappingURL=main.js.map