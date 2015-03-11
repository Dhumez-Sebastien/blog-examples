var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Engine;
(function (Engine) {
    var Tile = (function (_super) {
        __extends(Tile, _super);
        function Tile(texture, isoX, isoY, width, height) {
            _super.call(this, texture);
            this._width = width;
            this._height = height;
            this.position.x += isoX * Engine.Config.tileWidth + Engine.Config.offsetX;
            this.position.y += isoY * Engine.Config.tileHeight + Engine.Config.offsetY;
            this._setInteractivity(true);
        }
        Tile.prototype._setInteractivity = function (interactive) {
            if (interactive) {
                this.interactive = true;
                this.hitArea = new PIXI.Polygon([
                    new PIXI.Point(0, 0),
                    new PIXI.Point(32, 0),
                    new PIXI.Point(32, 32),
                    new PIXI.Point(0, 32)
                ]);
                this.mouseover = this.touchstart = function (data) {
                    this.tint = 0x178c77;
                };
                this.mouseout = this.touchend = function (data) {
                    this.tint = 0xffffff;
                };
            }
            else {
                this.interactive = false;
            }
        };
        return Tile;
    })(PIXI.Sprite);
    Engine.Tile = Tile;
})(Engine || (Engine = {}));
//# sourceMappingURL=Tile.js.map