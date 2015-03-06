///<reference path="./../defLoader.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * IntroScene
 *
 * @module :: IntroScene
 * @description	:: Classe permettant de cr�e la sc�ne d'introduction de l'exemple.
 */
var Engine;
(function (Engine) {
    var IntroScene = (function (_super) {
        __extends(IntroScene, _super);
        /**
         * Constructeur
         */
        function IntroScene() {
            _super.call(this);
            /**
             * Cette variable permet de conna�tre si l'animation est en phase d'apparition ou disparition.
             *
             * @property _tilesetList
             * @type {object}
             * @private
             */
            this._out = false;
            this._logo = PIXI.Sprite.fromImage("assets/images/logo.png");
            this.addChild(this._logo);
            this._logo.scale.x = this._logo.scale.y = Engine.SceneManager.defaultWidth / 512;
            this._logo.anchor.x = 0.5;
            this._logo.anchor.y = 0.5;
            this._logo.alpha = 0;
            // move the sprite to the center of the screen
            this._logo.position.x = Engine.SceneManager.defaultWidth / 2;
            this._logo.position.y = Engine.SceneManager.defaultHeight / 2;
        }
        /**
         * Permet la mise � jour de la sc�ne.
         * @method update
         */
        IntroScene.prototype.update = function () {
            _super.prototype.update.call(this);
            if (!this._out) {
                if (this._logo.alpha < 1) {
                    this._logo.alpha += 0.01;
                }
                else {
                    this._out = true;
                }
            }
            else {
                if (this._logo.alpha > 0) {
                    this._logo.alpha -= 0.01;
                }
                else {
                    Engine.SceneManager.goToScene('game');
                }
            }
        };
        return IntroScene;
    })(Engine.Scene);
    Engine.IntroScene = IntroScene;
})(Engine || (Engine = {}));
//# sourceMappingURL=IntroScene.js.map