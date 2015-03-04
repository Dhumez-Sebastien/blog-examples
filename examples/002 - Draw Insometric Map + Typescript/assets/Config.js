/**
 * Config
 *
 * @module :: Config
 * @description	:: Simple fichier Typescript qui permet la configuration de l'exemple.
 */
var Engine;
(function (Engine) {
    var Config = (function () {
        function Config() {
            /**
             * Taille d'une Tile sur la carte du jeu
             * @type {number}
             */
            this.tileWidth = 100;
            this.tileHeight = 50;
            /**
             * Taille de la texture d'une Tile
             * @type {number}
             */
            this.tileTextureWidth = 100;
            this.tileTextureHeight = 100;
        }
        return Config;
    })();
    Engine.Config = Config;
})(Engine || (Engine = {}));
//# sourceMappingURL=Config.js.map