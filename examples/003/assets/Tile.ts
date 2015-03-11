///<reference path="./defLoader.d.ts" />

/**
 * Tile
 *
 * @module :: Tile
 * @description	:: Classe permettant la création d'une Tile.
 */

module Engine {
    export class Tile extends PIXI.Sprite {

        /**
         * Largeur de la Tile en pixel
         *
         * @property _width
         * @type {number}
         * @private
         */
        private _width : number;

        /**
         * Hauteur de la Tile en pixel
         *
         * @property _height
         * @type {number}
         * @private
         */
        private _height : number;

        /**
         * Constructeur de la classe Tile.
         *
         * @param texture {Boolean}         Permet de définir si la Tile doit être intéractive ou non.
         * @param isoX {Number}             Position isométrique X et la Tile
         * @param isoY {Number}             Position isométrique Y de la Tile
         * @param width {Number}            Position isométrique X et la Tile
         * @param height {Number}           Position isométrique Y de la Tile
         */
        constructor(texture : PIXI.Texture, isoX : number, isoY : number, width : number, height : number) {
            // Applique la texture de la Tile au Sprite
            super(texture);

            // On applique les valeurs contenant la taille de la Tile
            this._width = width;
            this._height = height;

            // Mise en place de la Tile à la bonne position
            this.position.x += isoX * Engine.Config.tileWidth + Engine.Config.offsetX;
            this.position.y += isoY * Engine.Config.tileHeight + Engine.Config.offsetY;

            // Puis on y ajoute l'intéractivité
            this._setInteractivity(true);
        }

        /**
         * Permet d'ajouter ou supprimer l'intéractivité d'une Tile.
         * @method _setInteractivity
         * @private
         *
         * @param interactive {Boolean}     Permet de définir si la Tile doit être intéractive ou non.
         */
        private _setInteractivity(interactive : boolean) : void {
            if (interactive) {
                // Rend la Tile interactive
                this.interactive = true;

                // Création de la zone de collision avec la souris
                this.hitArea = new PIXI.Polygon([
                        new PIXI.Point(0, 0),
                        new PIXI.Point(32, 0),
                        new PIXI.Point(32, 32),
                        new PIXI.Point(0, 32)]
                );

                // Application d'une teinte quand la souris survol la tile
                this.mouseover = this.touchstart = function(data){
                    this.tint = 0x178c77;
                };

                // Suppression de celle-ci une fois que la souris quitte la Tile
                this.mouseout = this.touchend = function(data){
                    this.tint = 0xffffff;
                };
            } else {
                this.interactive = false;
            }
        }
    }
}