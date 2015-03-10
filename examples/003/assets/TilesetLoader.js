///<reference path="./defLoader.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * TilesetLoader
 *
 * @module :: TilesetLoader
 * @description	:: Classe permettant le chargement et d�coupage d'un Tileset.
 */
var Engine;
(function (Engine) {
    var TilesetLoader = (function (_super) {
        __extends(TilesetLoader, _super);
        /**
         * Constructeur
         *
         * @param tilesetUrl {string}       Url du Tileset
         */
        function TilesetLoader(tilesetUrl) {
            _super.call(this, tilesetUrl, true);
            /**
             * Array contenant une liste de callback � envoyer une fois le Tileset charger et d�couper
             *
             * @property _onReadyCb
             * @type {function[]}
             * @private
             */
            this._onReadyCb = [];
            /**
             * Status actuel du Tileset (d�coup� et charg�)
             *
             * @property _ready
             * @type {boolean}
             * @private
             */
            this._ready = false;
            /**
             * Array contenant la liste des Textures des Tiles qui ont �t� d�couper du Tileset
             *
             * @property _tileList
             * @type {PIXI.Texture[]}
             * @private
             */
            this._tileList = [];
            // Scope
            var self = this;
            // Une fois le Tileset charg�, on demande le d�coupage des Tiles
            this.on('loaded', function () {
                self._cutTiles();
            });
            // Lancement du chargement du Tileset
            this.load();
        }
        /**
         * Permet la d�coupe de toute les Tiles du Tileset
         * @method _cutTiles
         * @private
         */
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
            // On peut consid�rer que le Tileset est maintenant pr�t
            this._ready = true;
            for (var i = 0, ls = this._onReadyCb.length; i < ls; i++) {
                this._onReadyCb[i](this);
            }
        };
        /**
         * Permet de r�cup�r� la texture d'une Tile d'apr�s son num�ro
         * @method getTile
         *
         * @param tileNumber {number}       Numero de la Tile qui doit �tre r�cup�r�
         * @return {PIXI.Texture}           Retourne la texture de la Tile
         */
        TilesetLoader.prototype.getTile = function (tileNumber) {
            if (tileNumber > -1 && tileNumber < this._tileList.length) {
                return this._tileList[tileNumber];
            }
            else {
                console.warn('Vous essayer d\'utiliser un num�ro de Tile inexistant : ' + tileNumber);
                return this._tileList[0];
            }
        };
        /**
         * Permet de conna�tre si le Tileset est pr�t � �tre utiliser.
         * @method isReady
         *
         * @return {boolean}                Retourne le status du Tileset
         */
        TilesetLoader.prototype.isReady = function () {
            return this._ready;
        };
        /**
         * Permet d'ajouter un callback une fois que le Tileset est charg�.
         * @method onReady
         *
         * @param cb {function}             Callback � �xecuter une fois le Tileset charg�
         */
        TilesetLoader.prototype.onReady = function (cb) {
            // Si le Tileset est d�j� charg�, on envoie directement le Callback. Sinon, on l'ajoute � la liste.
            if (this._ready) {
                cb(this);
            }
            else {
                this._onReadyCb.push(cb);
            }
        };
        return TilesetLoader;
    })(PIXI.ImageLoader);
    Engine.TilesetLoader = TilesetLoader;
})(Engine || (Engine = {}));
//# sourceMappingURL=TilesetLoader.js.map