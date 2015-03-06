///<reference path="./defLoader.d.ts" />
var Engine;
(function (Engine) {
    var Utils = (function () {
        function Utils() {
        }
        /**
         * Permet de généré automatiquement une carte d'après divers paramètres tel que la largeur/hauteur et les numero des Tiles à utilisés.
         *
         * @method generateMap
         * @static
         *
         * @param width                 Largeur de la carte
         * @param height                Hauteur de la carte
         * @param tileNumberMin         Numero minimum des Tiles à utilisés
         * @param tileNumberMax         Numero maximum des Tiles à utilisés
         * @return {number[]}           Retourne le tableau contenant les numero des Tiles à dessiné
         */
        Utils.generateMap = function (width, height, tileNumberMin, tileNumberMax) {
            var out = [];
            for (var i = 0, mapLength = width * height; i < mapLength; i++) {
                out.push(Math.floor((Math.random() * tileNumberMax) + tileNumberMin));
            }
            return out;
        };
        return Utils;
    })();
    Engine.Utils = Utils;
})(Engine || (Engine = {}));
//# sourceMappingURL=Utils.js.map