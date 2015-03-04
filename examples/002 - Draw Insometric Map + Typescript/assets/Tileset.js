var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Engine;
(function (Engine) {
    var Tileset = (function (_super) {
        __extends(Tileset, _super);
        function Tileset(tilesetUrl) {
            _super.call(this, tilesetUrl, true);
        }
        return Tileset;
    })(PIXI.ImageLoader);
    Engine.Tileset = Tileset;
})(Engine || (Engine = {}));
//# sourceMappingURL=Tileset.js.map