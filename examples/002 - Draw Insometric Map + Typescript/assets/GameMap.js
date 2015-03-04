/**
 * GameMap
 *
 * @module :: GameMap
 * @description	:: Classe permettant de crée une carte du jeu.
 */
var Engine;
(function (Engine) {
    var GameMap = (function () {
        /**
         * Constructeur
         *
         * @return {Engine.GameMap}     Retourne la carte courante
         */
        function GameMap() {
            /**
             * Contient la liste des numeros des Tiles utilisé pour dessiné la carte.
             *
             * @property groundNumber
             * @type {Number[]}
             */
            this.groundNumber = [];
            return this;
        }
        /**
         * Permet de généré automatiquement une carte d'après divers paramètres tel que la largeur/hauteur et les numero des Tiles à utilisés.
         *
         * @param width                 Largeur de la carte
         * @param height                Hauteur de la carte
         * @param tileNumberMin         Numero minimum des Tiles à utilisés
         * @param tileNumberMax         Numero maximum des Tiles à utilisés
         * @return {number[]}           Retourne le tableau contenant les numero des Tiles à dessiné
         */
        GameMap.prototype.randomMap = function (width, height, tileNumberMin, tileNumberMax) {
            // On vérifie que le tableau contenant le sol est bien vide, si ce n'est pas le cas, on le vide.
            if (this.groundNumber.length > 0) {
                this.groundNumber = [];
            }
            for (var i = 0, mapLength = width * height; i < mapLength; i++) {
                this.groundNumber.push(Math.floor((Math.random() * tileNumberMax) + tileNumberMin));
            }
            console.log('Map is now generated');
            // On renvoie la carte qui vient d'être généré
            return this.groundNumber;
        };
        return GameMap;
    })();
    Engine.GameMap = GameMap;
})(Engine || (Engine = {}));
//# sourceMappingURL=GameMap.js.map