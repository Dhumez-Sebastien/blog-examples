///<reference path="./defLoader.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Scene
 *
 * @module :: Scene
 * @description	:: Classe permettant la cr�ation de sc�ne.
 */
var Engine;
(function (Engine) {
    var Scene = (function (_super) {
        __extends(Scene, _super);
        /**
         * Constructeur
         *
         * @param color {number} optional       Permet de d�finir une couleur d'arri�re plan de la sc�ne.
         *                                      Cette couleur doit �tre au format h�xadecimal.
         */
        function Scene(color) {
            _super.call(this, color || 0xffffff);
            /**
             * Check if Scene is already started 1 time
             * @type {boolean}
             * @private
             */
            this._started = false;
            /**
             * Permet de d�finir le status de pause de la sc�ne
             * @type {boolean}
             * @private
             */
            this._paused = false;
        }
        /**
         * Cette fonction est appel� juste avant chaque d�marrage de la sc�ne.
         *
         * @method beforeResume
         */
        Scene.prototype.beforeResume = function () {
            if (!this._started) {
                this.onStart();
                this._started = true;
            }
        };
        /**
         * Cette fonction est appel� lors du premier d�marrage de la sc�ne. Son appel est donc unique.
         * Elle est principalement utilis� par les classes enfants.
         *
         * @method onStart
         */
        Scene.prototype.onStart = function () {
        };
        /**
         * Mise � jour de la sc�ne quand celle-ci est active.
         *
         * @method update
         */
        Scene.prototype.update = function () {
        };
        /**
         * Permet la mise en pause de la sc�ne.
         *
         * @method pause
         */
        Scene.prototype.pause = function () {
            this._paused = true;
        };
        /**
         * Permet la mise en marche de la sc�ne
         *
         * @method pause
         */
        Scene.prototype.resume = function () {
            this._paused = false;
            this.beforeResume();
        };
        /**
         * Permet de conna�tre si la sc�ne est en pause ou non.
         *
         * @method pause
         * @return {boolean}        Retourne le status "pause" de la sc�ne
         */
        Scene.prototype.isPaused = function () {
            return this._paused;
        };
        return Scene;
    })(PIXI.Stage);
    Engine.Scene = Scene;
})(Engine || (Engine = {}));
//# sourceMappingURL=Scene.js.map