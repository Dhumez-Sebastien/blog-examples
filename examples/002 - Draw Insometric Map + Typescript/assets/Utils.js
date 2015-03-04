var Engine;
(function (Engine) {
    var Utils = (function () {
        function Utils() {
        }
        Utils.generateMap = function (width, height, tileNumberMin, tileNumberMax) {
            var out = [];
            for (var y = 0; y < height; y++) {
                out.push([]);
                for (var x = 0; x < width; x++) {
                    out[y].push([]);
                    out[y][x].push(Math.floor((Math.random() * tileNumberMax) + tileNumberMin));
                }
            }
            return out;
        };
        return Utils;
    })();
    Engine.Utils = Utils;
})(Engine || (Engine = {}));
//# sourceMappingURL=Utils.js.map