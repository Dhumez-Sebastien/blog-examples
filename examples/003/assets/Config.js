///<reference path="./defLoader.d.ts" />
/**
 * Config
 *
 * @module :: Config
 * @description	:: Classe Typescript permettant la configuration de l'exemple.
 */
var Engine;
(function (Engine) {
    var Config = (function () {
        function Config() {
        }
        /**
         * Permet de mettre à jours dynamiquement le décalage en pixel des Tiles.
         * @method calculateOffset
         * @static
         */
        Config.calculateOffset = function () {
            this.offsetX = 0;
            this.offsetY = 0;
        };
        /**
         * Largeur de la zone de jeu de base en pixel.
         * @property gameScreenX
         * @type {number}
         * @static
         */
        Config.gameScreenX = 800;
        /**
         * Hauteur de la zone de jeu de base en pixel.
         * @property gameScreenY
         * @type {number}
         * @static
         */
        Config.gameScreenY = 600;
        /**
         * Largeur d'une Tile en pixel sur la carte du jeu.
         * @property tileWidth
         * @type {number}
         * @static
         */
        Config.tileWidth = 32;
        /**
         * Hauteur d'une Tile en pixel sur la carte du jeu.
         * @property tileHeight
         * @type {number}
         * @static
         */
        Config.tileHeight = 32;
        /**
         * Largeur de la texture d'une Tile en pixel l'image du Tileset
         * @property tileTextureWidth
         * @type {number}
         * @static
         */
        Config.tileTextureWidth = 32;
        /**
         * Hauteur de la texture d'une Tile en pixel l'image du Tileset
         * @property tileTextureHeight
         * @type {number}
         * @static
         */
        Config.tileTextureHeight = 32;
        return Config;
    })();
    Engine.Config = Config;
})(Engine || (Engine = {}));
//# sourceMappingURL=Config.js.map