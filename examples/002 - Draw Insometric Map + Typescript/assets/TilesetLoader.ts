///<reference path="./defLoader.d.ts" />

module Engine {
    export class TilesetLoader extends PIXI.ImageLoader {

        private _onReadyCb : Function[] = [];

        private _ready : boolean = false;

        private _tileList : any[] = [];


        private _uid : string;
        private _usedBy : {} = {};

        constructor(tilesetUrl : string) {
            super(tilesetUrl, true);

            var self : TilesetLoader = this;

            this.on('loaded', function() {
                self._cutTiles();
            });

            this.load();
        }

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

            this._ready = true;

            // Une fois le Tileset correctement charger et découper, nous pouvons envoyer les callback
            for (var i : number = 0, ls : number = this._onReadyCb.length; i < ls; i++) {
                this._onReadyCb[i]();
            }
        }

        public getTile(tileNumber : number) : PIXI.Texture {
            if (tileNumber > -1 && tileNumber < this._tileList.length) {
                return this._tileList[tileNumber];
            } else {
                console.warn('Vous essayer d\'utiliser un numéro de Tile inexistant : '+tileNumber);
                return this._tileList[tileNumber];
            }
        }

        public isReady() : boolean {
            return this._ready;
        }

        public onReady(cb : () => void) : void {
            this._onReadyCb.push(cb);
        }
    }
}