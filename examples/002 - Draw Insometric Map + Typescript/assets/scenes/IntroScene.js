var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Engine;
(function (Engine) {
    var IntroScene = (function (_super) {
        __extends(IntroScene, _super);
        function IntroScene() {
            _super.call(this);
            this._out = false;
            this.setBackgroundColor(0x000000);
            this.logo = PIXI.Sprite.fromImage("assets/images/logo.png");
            this.addChild(this.logo);
            this.logo.scale.x = this.logo.scale.y = Engine.SceneManager.defaultWidth / 512;
            this.logo.anchor.x = 0.5;
            this.logo.anchor.y = 0.5;
            this.logo.alpha = 0;
            // move the sprite to the center of the screen
            this.logo.position.x = Engine.SceneManager.defaultWidth / 2;
            this.logo.position.y = Engine.SceneManager.defaultHeight / 2;
        }
        IntroScene.prototype.update = function () {
            _super.prototype.update.call(this);
            if (!this._out) {
                if (this.logo.alpha < 1) {
                    this.logo.alpha += 0.01;
                }
                else {
                    this._out = true;
                }
            }
            else {
                if (this.logo.alpha > 0) {
                    this.logo.alpha -= 0.01;
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