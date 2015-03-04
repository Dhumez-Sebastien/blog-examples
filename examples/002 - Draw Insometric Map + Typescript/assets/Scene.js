var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * That's used to extends Scenes creation
 */
var Engine;
(function (Engine) {
    var Scene = (function (_super) {
        __extends(Scene, _super);
        function Scene(color) {
            _super.call(this, color || 0x000000);
            /**
             * Check if Scene is already started 1 time
             * @type {boolean}
             * @private
             */
            this._started = false;
            this.paused = false;
            this.updateCB = function () {
            };
        }
        /**
         * This function is called before Scene is resume
         */
        Scene.prototype.beforeResume = function () {
            // Used by children before resume
            if (!this._started) {
                this.onStart();
                this._started = true;
            }
        };
        /**
         * Used essentially by children when the Scene start for the first time.
         */
        Scene.prototype.onStart = function () {
        };
        Scene.prototype.onUpdate = function (updateCB) {
            this.updateCB = updateCB;
        };
        Scene.prototype.update = function () {
            this.updateCB();
        };
        Scene.prototype.pause = function () {
            this.paused = true;
        };
        /**
         * Set the pause system to false
         */
        Scene.prototype.resume = function () {
            this.paused = false;
            this.beforeResume();
        };
        /**
         * Check if the Scene is actually in pause
         */
        Scene.prototype.isPaused = function () {
            return this.paused;
        };
        return Scene;
    })(PIXI.Stage);
    Engine.Scene = Scene;
})(Engine || (Engine = {}));
//# sourceMappingURL=Scene.js.map