///<reference path="./defLoader.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * GameMap
 *
 * @module :: GameMap
 * @description	:: Classe permettant de regrouper les différentes cartes de notre exemple.
 */
var Engine;
(function (Engine) {
    /**
     * Attention, vous remarquerez qu'ici, nous n'exportons pas la classe. Celle-ci est créer et exporter en bas de page afin
     * qu'elle soit bien prise en compte comme conteneur statique.
     */
    var GameMapStatic = (function (_super) {
        __extends(GameMapStatic, _super);
        function GameMapStatic() {
            _super.apply(this, arguments);
        }
        /**
         * Permet de charger une carte.
         * @method loadMap
         * @static
         *
         * @param mapConfig {any}       Paramètres de la carte qui doit être chargé.
         */
        GameMapStatic.prototype.loadMap = function (mapConfig) {
            this.addChild(new Engine.Map(mapConfig));
        };
        return GameMapStatic;
    })(PIXI.DisplayObjectContainer);
    /**
     * On créer et exporte la classe afin qu'elle soit statique
     */
    Engine.GameMap = new GameMapStatic();
})(Engine || (Engine = {}));
//# sourceMappingURL=GameMap.js.map