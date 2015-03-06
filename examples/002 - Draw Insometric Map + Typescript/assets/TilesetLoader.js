///<reference path="./defLoader.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Engine;
(function (Engine) {
    var TilesetLoader = (function (_super) {
        __extends(TilesetLoader, _super);
        function TilesetLoader(tilesetUrl) {
            _super.call(this, tilesetUrl, true);
            this._onReadyCb = [];
            this._ready = false;
            this._tileList = [];
            this._usedBy = {};
            var self = this;
            this.on('loaded', function () {
                self._cutTiles();
            });
            this.load();
        }
        TilesetLoader.prototype._cutTiles = function () {
            for (var i = 0, textureHeight = Math.floor(this.texture.height / Engine.Config.tileTextureHeight); i < textureHeight; i++) {
                for (var j = 0, textureWidth = Math.floor(this.texture.width / Engine.Config.tileTextureWidth); j < textureWidth; j++) {
                    // On calcule les diff�rentes positions des Tiles
                    var tilePosition = new PIXI.Rectangle(j * Engine.Config.tileTextureWidth, i * Engine.Config.tileTextureHeight, Engine.Config.tileTextureWidth, Engine.Config.tileTextureHeight);
                    // On cr�e la texture de la Tile
                    var tTile = new PIXI.Texture(this.texture.baseTexture, tilePosition);
                    // On ajoute la texture au tableau des Tiles
                    this._tileList.push(tTile);
                }
            }
            this._ready = true;
            for (var i = 0, ls = this._onReadyCb.length; i < ls; i++) {
                this._onReadyCb[i]();
            }
        };
        TilesetLoader.prototype.getTile = function (tileNumber) {
            if (tileNumber > -1 && tileNumber < this._tileList.length) {
                return this._tileList[tileNumber];
            }
            else {
                console.warn('Vous essayer d\'utiliser un num�ro de Tile inexistant : ' + tileNumber);
                return this._tileList[tileNumber];
            }
        };
        TilesetLoader.prototype.isReady = function () {
            return this._ready;
        };
        TilesetLoader.prototype.onReady = function (cb) {
            this._onReadyCb.push(cb);
        };
        return TilesetLoader;
    })(PIXI.ImageLoader);
    Engine.TilesetLoader = TilesetLoader;
})(Engine || (Engine = {}));
//# sourceMappingURL=TilesetLoader.js.map