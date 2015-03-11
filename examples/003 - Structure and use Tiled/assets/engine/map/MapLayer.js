var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Engine;
(function (Engine) {
    var MapLayer = (function (_super) {
        __extends(MapLayer, _super);
        function MapLayer() {
            _super.apply(this, arguments);
        }
        return MapLayer;
    })(PIXI.DisplayObjectContainer);
    Engine.MapLayer = MapLayer;
})(Engine || (Engine = {}));
//# sourceMappingURL=MapLayer.js.map