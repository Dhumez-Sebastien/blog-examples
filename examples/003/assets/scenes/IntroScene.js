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
            this._logo = PIXI.Sprite.fromImage("assets/images/logo.png");
            this.addChild(this._logo);
            this._logo.scale.x = this._logo.scale.y = Engine.SceneManager.defaultWidth / (Engine.SceneManager.defaultWidth / 2);
            this._logo.anchor.x = this._logo.anchor.y = 0.5;
            this._logo.alpha = 0;
            this._logo.position.x = Engine.SceneManager.defaultWidth / 2;
            this._logo.position.y = Engine.SceneManager.defaultHeight / 2;
        }
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