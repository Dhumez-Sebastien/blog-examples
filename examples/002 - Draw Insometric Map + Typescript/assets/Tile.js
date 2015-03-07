///<reference path="./defLoader.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Tile
 *
 * @module :: Tile
 * @description	:: Classe permettant la création d'une Tile.
 */
var Engine;
(function (Engine) {
    var Tile = (function (_super) {
        __extends(Tile, _super);
        /**
         * Constructeur de la classe Tile.
         *
         * @param texture {Boolean}         Permet de définir si la Tile doit être intéractive ou non.
         * @param isoX {Number}             Position isométrique X et la Tile
         * @param isoY {Number}             Position isométrique Y de la Tile
         */
        function Tile(texture, isoX, isoY) {
            // Applique la texture de la Tile au Sprite
            _super.call(this, texture);
            // Mise en place de la Tile à la bonne position
            this.position.x += (isoX - isoY) * (Engine.Config.tileWidth / 2) + Engine.Config.offsetX;
            this.position.y += (isoX + isoY) * (Engine.Config.tileHeight / 2) + Engine.Config.offsetY;
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
        Tile.prototype._setInteractivity = function (interactive) {
            if (interactive) {
                // Rend la Tile interactive
                this.interactive = true;
                // Création de la zone de collision avec la souris
                this.hitArea = new PIXI.Polygon([
                    new PIXI.Point(50, 25),
                    new PIXI.Point(100, 50),
                    new PIXI.Point(50, 50 + 25),
                    new PIXI.Point(0, 50)
                ]);
                // Application d'une teinte quand la souris survol la tile
                this.mouseover = this.touchstart = function (data) {
                    this.tint = 0x178c77;
                };
                // Suppression de celle-ci une fois que la souris quitte la Tile
                this.mouseout = this.touchend = function (data) {
                    this.tint = 0xffffff;
                };
            }
            else {
                this.interactive = false;
            }
        };
        return Tile;
    })(PIXI.Sprite);
    Engine.Tile = Tile;
})(Engine || (Engine = {}));
//# sourceMappingURL=Tile.js.map