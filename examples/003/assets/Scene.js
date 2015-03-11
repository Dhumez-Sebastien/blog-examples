var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Engine;
(function (Engine) {
    var Scene = (function (_super) {
        __extends(Scene, _super);
        function Scene(color) {
            _super.call(this, color || 0xffffff);
            this._started = false;
            this._paused = false;
        }
        Scene.prototype.beforeResume = function () {
            if (!this._started) {
                this.onStart();
                this._started = true;
            }
        };
        Scene.prototype.onStart = function () {
        };
        Scene.prototype.update = function () {
        };
        Scene.prototype.pause = function () {
            this._paused = true;
        };
        Scene.prototype.resume = function () {
            this._paused = false;
            this.beforeResume();
        };
        Scene.prototype.isPaused = function () {
            return this._paused;
        };
        return Scene;
    })(PIXI.Stage);
    Engine.Scene = Scene;
})(Engine || (Engine = {}));
//# sourceMappingURL=Scene.js.map