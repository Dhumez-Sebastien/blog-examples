///<reference path="./defLoader.d.ts" />
/**
 * Tileset
 *
 * @module :: Tileset
 * @description	:: Classe statique permettant de manager les Tilesets.
 */
var Engine;
(function (Engine) {
    var Tileset = (function () {
        function Tileset() {
        }
        /**
         * Permet la r�cup�ration d'un tileset d'apr�s son Url.
         * @method getTileset
         * @static
         *
         * @param tilesetUrl {string}       Url du Tileset � r�cup�rer
         * @return {TilesetLoader}          Retourne l'objet TilesetLoader qui lui contient les Tiles d�coup�es
         */
        Tileset.getTileset = function (tilesetUrl) {
            if (this._tilesetList[tilesetUrl]) {
                if (this._tilesetList[tilesetUrl].isReady()) {
                    return this._tilesetList[tilesetUrl];
                }
                else {
                    throw ('Tileset is not ready : ' + tilesetUrl);
                }
            }
            else {
                throw ('Unknown Tileset : ' + tilesetUrl);
            }
        };
        /**
         * Permet le chargement d'une liste de Tileset
         * @method load
         * @static
         *
         * @param tilesetList {string[]}    Array contenant une liste d'Url de Tileset � charger
         */
        Tileset.load = function (tilesetList) {
            if (tilesetList.length > 0) {
                for (var i = 0, ls = tilesetList.length; i < ls; i++) {
                    if (!this._tilesetList[tilesetList[i]]) {
                        this._tilesetList[tilesetList[i]] = new Engine.TilesetLoader(tilesetList[i]);
                    }
                }
            }
        };
        /**
         * Permet d'assign� un callback quand un Tileset est charger et ses Tiles sont d�coup�s
         * @method onReady
         * @static
         *
         * @param tilesetUrl {string}       Url du Tileset
         * @param cb {function}             Callback une fois le Tileset charger et d�couper
         */
        Tileset.onReady = function (tilesetUrl, cb) {
            // V�rification de l'existance du Tileset dans la liste
            if (this._tilesetList[tilesetUrl]) {
                this._tilesetList[tilesetUrl].onReady(cb);
            }
            else {
                throw ('Unknown Tileset : ' + tilesetUrl);
            }
        };
        /**
         * Contient la liste des Tilesets actuellement utilis�.
         *
         * @property _tilesetList
         * @type {object}
         * @private
         */
        Tileset._tilesetList = {};
        return Tileset;
    })();
    Engine.Tileset = Tileset;
})(Engine || (Engine = {}));
//# sourceMappingURL=Tileset.js.map