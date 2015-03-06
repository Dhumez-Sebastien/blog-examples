///<reference path="./defLoader.d.ts" />

/**
 * GameMap
 *
 * @module :: GameMap
 * @description	:: Classe permettant de regrouper les différentes cartes de notre exemple.
 */

module Engine {
    export class GameMap {

        /**
         * Contient les différentes cartes de l'exemple.
         *
         * @property container
         * @type {PIXI.DisplayObjectContainer}
         * @static
         */
        public static container : PIXI.DisplayObjectContainer = new PIXI.DisplayObjectContainer();

        /**
         * Permet de charger une carte.
         * @method loadMap
         * @static
         *
         * @param mapConfig {any}       Paramètres de la carte qui dois être chargé.
         */
        public static loadMap(mapConfig : any) : void {
            this.container.addChild(new Engine.Map(mapConfig));
        }
    }
}