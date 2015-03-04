/**
 * Config
 *
 * @module :: Config
 * @description	:: Simple fichier Typescript qui permet la configuration de l'exemple.
 */

module Engine {
    export class Config {

        /**
         * Taille d'une Tile sur la carte du jeu
         * @type {number}
         */
        public tileWidth : number = 100;
        public tileHeight: number = 50;

        /**
         * Taille de la texture d'une Tile
         * @type {number}
         */
        public tileTextureWidth : number = 100;
        public tileTextureHeight : number = 100;
    }
}