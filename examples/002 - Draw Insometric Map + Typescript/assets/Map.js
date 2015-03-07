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
         * @param mapConfig {any}       Objet au format JSON contenant les paramètres de la carte à réaliser.
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
            // On demande le chargement du Tileset
            Engine.Tileset.load([this._tilesetUrl]);
            // Scope
            var self = this;
            // Une fois le Tileset correctement chargé, on demande l'affichage de la carte
            Engine.Tileset.onReady(this._tilesetUrl, function () {
                self._draw();
            });
        }
        /**
         * Permet de dessiné la carte
         * @method _draw
         * @private
         */
        Map.prototype._draw = function () {
            // On va chercher le Tileset afin d'obtenir le tableau contenant la liste des textures des différentes Tiles
            var tileset = Engine.Tileset.getTileset(this._tilesetUrl), tileCounter = 0;
            for (var y = 0; y < this._tileHeight; y++) {
                for (var x = 0; x < this._tileWidth; x++) {
                    // Création de la Tile en lui envoyant sa texture et sa position
                    this.addChild(new Engine.Tile(tileset.getTile(this._ground[tileCounter]), x, y));
                    // On incremente le compteur de Tile
                    tileCounter++;
                }
            }
        };
        return Map;
    })(PIXI.DisplayObjectContainer);
    Engine.Map = Map;
})(Engine || (Engine = {}));
//# sourceMappingURL=Map.js.map