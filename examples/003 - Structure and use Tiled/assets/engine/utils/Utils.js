var Engine;
(function (Engine) {
    var Utils = (function () {
        function Utils() {
        }
        Utils.generateMap = function (width, height, tileNumberMin, tileNumberMax) {
            var out = [];
            for (var i = 0, mapLength = width * height; i < mapLength; i++) {
                out.push(Math.floor((Math.random() * tileNumberMax) + tileNumberMin));
            }
            return out;
        };
        return Utils;
    })();
    Engine.Utils = Utils;
})(Engine || (Engine = {}));
//# sourceMappingURL=Utils.js.map