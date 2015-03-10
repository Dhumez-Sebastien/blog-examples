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
        function Tile(texture, isoX, isoY) {
            _super.call(this, texture);
            this.position.x += (isoX - isoY) * (Engine.Config.tileWidth / 2) + Engine.Config.offsetX;
            this.position.y += (isoX + isoY) * (Engine.Config.tileHeight / 2) + Engine.Config.offsetY;
            this._setInteractivity(true);
        }
        Tile.prototype._setInteractivity = function (interactive) {
            if (interactive) {
                this.interactive = true;
                this.hitArea = new PIXI.Polygon([
                    new PIXI.Point(50, 25),
                    new PIXI.Point(100, 50),
                    new PIXI.Point(50, 50 + 25),
                    new PIXI.Point(0, 50)
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