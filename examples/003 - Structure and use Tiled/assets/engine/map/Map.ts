///<reference path="./../defLoader.d.ts" />

/**
 * Map
 *
 * @module :: Map
 * @description	:: Classe permettant de crée une carte du jeu.
 */

module Engine {
    export class Map extends PIXI.DisplayObjectContainer {

        /**
         * Contient la liste des numeros des Tiles utilisé pour dessiné la carte.
         *
         * @property _ground
         * @type {number[]}
         * @private
         */
        private _ground : number [] = [];

        /**
         * Largeur de la carte en Tile
         *
         * @property _tileWidth
         * @type {number[]}
         * @private
         */
        private _tileWidth : number;

        /**
         * Hauteur de la carte en Tile
         *
         * @property _tileHeight
         * @type {number[]}
         * @private
         */
        private _tileHeight : number;

        /**
         * Url du Tileset de la carte
         *
         * @property _tilesetUrl
         * @type {string}
         * @private
         */
        private _tilesetUrl : string;

        /**
         * Constructeur
         *
         * @param mapConfig {any}       Objet au format JSON contenant les paramètres de la carte à réaliser.
         */
        constructor (mapConfig : any) {
            super();

            // On applique les données de la carte aux variables
            this._ground = mapConfig.data;
            this._tileWidth = mapConfig.width;
            this._tileHeight = mapConfig.height;
            this._tilesetUrl = mapConfig.url;

            // On demande le chargement du Tileset
            Engine.Tileset.load([this._tilesetUrl]);

            // Scope
            var self : Engine.Map = this;

            // Une fois le Tileset correctement chargé, on demande l'affichage de la carte
            Engine.Tileset.onReady(this._tilesetUrl, function(tileset) {
                self._draw();
            });
        }

        /**
         * Permet de dessiné la carte
         * @method _draw
         * @private
         */
        private _draw() : void {
            // On va chercher le Tileset afin d'obtenir le tableau contenant la liste des textures des différentes Tiles
            var tileset : Engine.TilesetLoader = Engine.Tileset.getTileset(this._tilesetUrl),
                tileCounter : number = 0;

            // Puis on parcours toute les Tiles de la carte
            for (var y = 0; y < this._tileHeight; y++) {
                for (var x = 0; x < this._tileWidth; x++) {
                    // Création de la Tile en lui envoyant sa texture et sa position
                    this.addChild(new Engine.Tile(tileset.getTile(this._ground[tileCounter]), x, y));

                    // On incremente le compteur de Tile
                    tileCounter++;
                }
            }
        }
    }
}