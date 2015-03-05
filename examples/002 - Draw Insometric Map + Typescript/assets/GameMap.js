/**
 * GameMap
 *
 * @module :: GameMap
 * @description	:: Classe permettant de regrouper les différentes cartes du jeu.
 */
var Engine;
(function (Engine) {
    var GameMap = (function () {
        function GameMap() {
        }
        GameMap.container = new PIXI.DisplayObjectContainer();
        return GameMap;
    })();
    Engine.GameMap = GameMap;
})(Engine || (Engine = {}));
//# sourceMappingURL=GameMap.js.map