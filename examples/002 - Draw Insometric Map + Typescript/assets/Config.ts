/**
 * Config
 *
 * @module :: Config
 * @description	:: Classe Typescript permettant la configuration de l'exemple.
 */

module Engine {
    export class Config {

        /**
         * Largeur de la zone de jeu de base en pixel.
         * @property gameScreenX
         * @type {number}
         * @static
         */
        public static gameScreenX : number = 1024;

        /**
         * Hauteur de la zone de jeu de base en pixel.
         * @property gameScreenY
         * @type {number}
         * @static
         */
        public static gameScreenY : number = 768;

        /**
         * Décalage de base sur l'axe X des Tiles lors de l'affichage. Ce décalage est calculé lors du démarrage du jeu.
         * @property offsetX
         * @type {number}
         * @static
         */
        public static offsetX : number;

        /**
         * Décalage de base sur l'axe Y des Tiles lors de l'affichage. Ce décalage est calculé lors du démarrage du jeu.
         * @property offsetY
         * @type {number}
         * @static
         */
        public static offsetY : number;

        /**
         * Largeur d'une Tile en pixel sur la carte du jeu.
         * @property tileWidth
         * @type {number}
         * @static
         */
        public static tileWidth : number = 100;

        /**
         * Hauteur d'une Tile en pixel sur la carte du jeu.
         * @property tileHeight
         * @type {number}
         * @static
         */
        public static tileHeight: number = 50;

        /**
         * Largeur de la texture d'une Tile en pixel l'image du Tileset
         * @property tileTextureWidth
         * @type {number}
         * @static
         */
        public static tileTextureWidth : number = 100;

        /**
         * Hauteur de la texture d'une Tile en pixel l'image du Tileset
         * @property tileTextureHeight
         * @type {number}
         * @static
         */
        public static tileTextureHeight : number = 100;

        /**
         * Permet de mettre à jours dynamiquement le décalage en pixel des Tiles.
         * @method calculateOffset
         * @static
         */
        public static calculateOffset() : void {
            this.offsetX  = (Engine.Config.gameScreenX / 2) - (Engine.Config.tileWidth / 2);
            this.offsetY = Engine.Config.tileHeight;
        }
    }
}