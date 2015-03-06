///<reference path="./defLoader.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Map
 *
 * @module :: Map
 * @description	:: Classe permettant de crée une carte du jeu.
 */
var Engine;
(function (Engine) {
    var Map = (function (_super) {
        __extends(Map, _super);
        /**
         * Constructeur
         *
         * @return {Engine.Map}     Retourne la carte courante
         */
        function Map(mapConfig) {
            _super.call(this);
            /**
             * Contient la liste des numeros des Tiles utilisé pour dessiné la carte.
             *
             * @property _ground
             * @type {number[]}
             * @private
             */
            this._ground = [];
            // On applique les données de la carte aux variables
            this._ground = mapConfig.data;
            this._tileWidth = mapConfig.width;
            this._tileHeight = mapConfig.height;
            this._tilesetUrl = mapConfig.url;
            console.log('Map is correctly build');
            // On demande le chargement du Tileset
            Engine.Tileset.load([this._tilesetUrl]);
            var self = this;
            Engine.Tileset.onReady(this._tilesetUrl, function () {
                self._draw();
            });
        }
        Map.prototype._draw = function () {
            console.log('Draw order');
            var tileset = Engine.Tileset.getTileset(this._tilesetUrl);
            for (var y = 0; y < this._tileHeight; y++) {
                for (var x = 0; x < this._tileWidth; x++) {
                    var tileNumber = this._ground[(y * this._tileWidth) + x], tile = new PIXI.Sprite(tileset.getTile(tileNumber));
                    console.log(tile);
                    tile.position.x += (x - y) * (Engine.Config.tileWidth / 2) + Engine.Config.offsetX;
                    tile.position.y += (x + y) * (Engine.Config.tileHeight / 2) + Engine.Config.offsetY;
                    // Rend la Tile interactive
                    tile.interactive = true;
                    // Création de la zone de collision avec la souris
                    tile.hitArea = new PIXI.Polygon([
                        new PIXI.Point(50, 25),
                        new PIXI.Point(100, 50),
                        new PIXI.Point(50, 50 + 25),
                        new PIXI.Point(0, 50)
                    ]);
                    // Application d'une teinte quand la souris survol la tile
                    tile.mouseover = tile.touchstart = function (data) {
                        this.tint = 0x178c77;
                    };
                    // Suppression de celle-ci une fois que la souris quitte la Tile
                    tile.mouseout = tile.touchend = function (data) {
                        this.tint = 0xffffff;
                    };
                    // On ajoute la Tile à la carte
                    this.addChild(tile);
                }
            }
        };
        return Map;
    })(PIXI.DisplayObjectContainer);
    Engine.Map = Map;
})(Engine || (Engine = {}));
//# sourceMappingURL=Map.js.map