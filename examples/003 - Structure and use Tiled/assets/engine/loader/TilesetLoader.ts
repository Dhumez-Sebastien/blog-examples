///<reference path="./../defLoader.d.ts" />

/**
 * TilesetLoader
 *
 * @module :: TilesetLoader
 * @description	:: Classe permettant le chargement et découpage d'un Tileset.
 */

module Engine {
    export class TilesetLoader extends PIXI.ImageLoader {

        /**
         * Array contenant une liste de callback à envoyer une fois le Tileset charger et découper
         *
         * @property _onReadyCb
         * @type {function[]}
         * @private
         */
        private _onReadyCb : Function[] = [];

        /**
         * Status actuel du Tileset (découpé et chargé)
         *
         * @property _ready
         * @type {boolean}
         * @private
         */
        private _ready : boolean = false;

        /**
         * Array contenant la liste des Textures des Tiles qui ont été découper du Tileset
         *
         * @property _tileList
         * @type {PIXI.Texture[]}
         * @private
         */
        private _tileList : PIXI.Texture[] = [];

        /**
         * Constructeur
         *
         * @param tilesetUrl {string}       Url du Tileset
         */
        constructor(tilesetUrl : string) {
            super(tilesetUrl, true);

            // Scope
            var self : TilesetLoader = this;

            // Une fois le Tileset chargé, on demande le découpage des Tiles
            this.on('loaded', function() {
                self._cutTiles();
            });

            // Lancement du chargement du Tileset
            this.load();
        }

        /**
         * Permet la découpe de toute les Tiles du Tileset
         * @method _cutTiles
         * @private
         */
        private _cutTiles() : void {
            // Découpage des Tiles
            for (var i : number = 0, textureHeight : number = Math.floor(this.texture.height / Engine.Config.tileTextureHeight); i < textureHeight; i++) {
                for (var j : number = 0, textureWidth : number = Math.floor(this.texture.width / Engine.Config.tileTextureWidth); j < textureWidth; j++) {

                    // On calcule les différentes positions des Tiles
                    var tilePosition = new PIXI.Rectangle(j * Engine.Config.tileTextureWidth, i * Engine.Config.tileTextureHeight, Engine.Config.tileTextureWidth, Engine.Config.tileTextureHeight);

                    // On crée la texture de la Tile
                    var tTile = new PIXI.Texture(this.texture.baseTexture, tilePosition);

                    // On ajoute la texture au tableau des Tiles
                    this._tileList.push(tTile);
                }
            }

            // On peut considérer que le Tileset est maintenant prêt
            this._ready = true;

            // Une fois le Tileset correctement charger et découper, nous pouvons envoyer les callback
            for (var i : number = 0, ls : number = this._onReadyCb.length; i < ls; i++) {
                this._onReadyCb[i](this);
            }
        }

        /**
         * Permet de récupéré la texture d'une Tile d'après son numéro
         * @method getTile
         *
         * @param tileNumber {number}       Numero de la Tile qui doit être récupéré
         * @return {PIXI.Texture}           Retourne la texture de la Tile
         */
        public getTile(tileNumber : number) : PIXI.Texture {
            if (tileNumber > -1 && tileNumber < this._tileList.length) {
                return this._tileList[tileNumber];
            } else {
                console.warn('Vous essayer d\'utiliser un numéro de Tile inexistant : '+tileNumber);
                return this._tileList[0];
            }
        }

        /**
         * Permet de connaître si le Tileset est prêt à être utiliser.
         * @method isReady
         *
         * @return {boolean}                Retourne le status du Tileset
         */
        public isReady() : boolean {
            return this._ready;
        }

        /**
         * Permet d'ajouter un callback une fois que le Tileset est chargé.
         * @method onReady
         *
         * @param cb {function}             Callback à éxecuter une fois le Tileset chargé
         */
        public onReady(cb : (tileset : Engine.TilesetLoader) => void) : void {
            // Si le Tileset est déjà chargé, on envoie directement le Callback. Sinon, on l'ajoute à la liste.
            if (this._ready) {
                cb(this);
            } else {
                this._onReadyCb.push(cb);
            }
        }
    }
}