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
            this.offsetX = (Engine.Config.gameScreenX / 2) - (Engine.Config.tileWidth / 2);
            this.offsetY = Engine.Config.tileHeight;
        };
        /**
         * Largeur de la zone de jeu de base en pixel.
         * @property gameScreenX
         * @type {number}
         * @static
         */
        Config.gameScreenX = 1024;
        /**
         * Hauteur de la zone de jeu de base en pixel.
         * @property gameScreenY
         * @type {number}
         * @static
         */
        Config.gameScreenY = 768;
        /**
         * Largeur d'une Tile en pixel sur la carte du jeu.
         * @property tileWidth
         * @type {number}
         * @static
         */
        Config.tileWidth = 100;
        /**
         * Hauteur d'une Tile en pixel sur la carte du jeu.
         * @property tileHeight
         * @type {number}
         * @static
         */
        Config.tileHeight = 50;
        /**
         * Largeur de la texture d'une Tile en pixel l'image du Tileset
         * @property tileTextureWidth
         * @type {number}
         * @static
         */
        Config.tileTextureWidth = 100;
        /**
         * Hauteur de la texture d'une Tile en pixel l'image du Tileset
         * @property tileTextureHeight
         * @type {number}
         * @static
         */
        Config.tileTextureHeight = 100;
        return Config;
    })();
    Engine.Config = Config;
})(Engine || (Engine = {}));
//# sourceMappingURL=Config.js.map