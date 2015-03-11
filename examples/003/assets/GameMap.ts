///<reference path="./defLoader.d.ts" />

/**
 * GameMap
 *
 * @module :: GameMap
 * @description	:: Classe permettant de regrouper les différentes cartes de notre exemple.
 */

module Engine {

    /**
     * Attention, vous remarquerez qu'ici, nous n'exportons pas la classe. Celle-ci est créer et exporter en bas de page afin
     * qu'elle soit bien prise en compte comme conteneur statique.
     */
    class GameMapStatic extends PIXI.DisplayObjectContainer {

        /**
         * Permet de charger une carte.
         * @method loadMap
         * @static
         *
         * @param mapConfig {any}       Paramètres de la carte qui doit être chargé.
         */
        public loadMap(mapConfig : any) : void {
            this.addChild(new Engine.Map(mapConfig));
        }
    }

    /**
     * On créer et exporte la classe afin qu'elle soit statique
     */
    export var GameMap = new GameMapStatic();
}