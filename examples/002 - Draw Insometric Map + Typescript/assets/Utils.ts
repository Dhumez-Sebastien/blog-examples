///<reference path="./defLoader.d.ts" />

module Engine {
    export class Utils {

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
        public static generateMap(width : number, height : number, tileNumberMin : number, tileNumberMax : number) : number[] {
            var out : number[] = [];

            // On génère les positions aléatoires de toute la carte courante
            for (var i : number = 0, mapLength : number = width * height; i < mapLength; i++) {
                out.push(Math.floor((Math.random() * tileNumberMax) + tileNumberMin));
            }

            return out;
        }
    }
}