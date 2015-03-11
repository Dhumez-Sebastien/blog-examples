var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Engine;
(function (Engine) {
    var Map = (function (_super) {
        __extends(Map, _super);
        function Map(mapConfig) {
            _super.call(this);
            this._layers = [];
            this._ground = [];
            this._ground = mapConfig.data;
            this._tileWidth = mapConfig.width;
            this._tileHeight = mapConfig.height;
            this._tilesetUrl = mapConfig.url;
            Engine.Tileset.load(mapConfig.tilesets, function () {
            });
            var self = this;
            Engine.Tileset.onReady(this._tilesetUrl, function (tileset) {
                self._draw();
            });
        }
        Map.prototype._draw = function () {
            var tileset = Engine.Tileset.getTileset(this._tilesetUrl), tileCounter = 0;
            for (var y = 0; y < this._tileHeight; y++) {
                for (var x = 0; x < this._tileWidth; x++) {
                    this.addChild(new Engine.Tile(tileset.getTile(this._ground[tileCounter]), x, y));
                    tileCounter++;
                }
            }
        };
        return Map;
    })(PIXI.DisplayObjectContainer);
    Engine.Map = Map;
})(Engine || (Engine = {}));
//# sourceMappingURL=Map.js.map