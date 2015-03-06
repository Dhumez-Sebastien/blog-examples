///<reference path="./defLoader.d.ts" />
/**
 * GameMap
 *
 * @module :: GameMap
 * @description	:: Classe permettant de regrouper les différentes cartes de notre exemple.
 */
var Engine;
(function (Engine) {
    var GameMap = (function () {
        function GameMap() {
        }
        /**
         * Permet de charger une carte.
         * @method loadMap
         * @static
         *
         * @param mapConfig {any}       Paramètres de la carte qui dois être chargé.
         */
        GameMap.loadMap = function (mapConfig) {
            this.container.addChild(new Engine.Map(mapConfig));
        };
        /**
         * Contient les différentes cartes de l'exemple.
         *
         * @property container
         * @type {PIXI.DisplayObjectContainer}
         * @static
         */
        GameMap.container = new PIXI.DisplayObjectContainer();
        return GameMap;
    })();
    Engine.GameMap = GameMap;
})(Engine || (Engine = {}));
//# sourceMappingURL=GameMap.js.map