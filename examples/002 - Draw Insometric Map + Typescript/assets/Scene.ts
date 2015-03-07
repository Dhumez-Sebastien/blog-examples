///<reference path="./defLoader.d.ts" />

/**
 * Scene
 *
 * @module :: Scene
 * @description	:: Classe permettant la cr�ation de sc�ne.
 */

module Engine {
    export class Scene extends PIXI.Stage {

        /**
         * Check if Scene is already started 1 time
         * @type {boolean}
         * @private
         */
        private _started : boolean = false;

        /**
         * Permet de d�finir le status de pause de la sc�ne
         * @type {boolean}
         * @private
         */
        private _paused: boolean = false;

        /**
         * Constructeur
         *
         * @param color {number} optional       Permet de d�finir une couleur d'arri�re plan de la sc�ne.
         *                                      Cette couleur doit �tre au format h�xadecimal.
         */
        constructor(color ?: number) {
            super(color || 0xffffff);

        }

        /**
         * This function is called before Scene is resume
         */

        /**
         * Cette fonction est appel� juste avant chaque d�marrage de la sc�ne.
         *
         * @method beforeResume
         */
        public beforeResume() : void {
            if (!this._started) {
                this.onStart();
                this._started = true;
            }
        }

        /**
         * Used essentially by children when the Scene start for the first time.
         */

        /**
         * Cette fonction est appel� lors du premier d�marrage de la sc�ne. Son appel est donc unique.
         *
         * @method onStart
         */
        public onStart() : void {

        }

        /**
         * Mise � jour de la sc�ne quand celle-ci est active.
         *
         * @method update
         */
        public update() : void {

        }

        /**
         * Permet la mise en pause de la sc�ne.
         *
         * @method pause
         */
        public pause() : void {
            this._paused = true;
        }

        /**
         * Permet la mise en marche de la sc�ne
         *
         * @method pause
         */
        public resume() : void {
            this._paused = false;
            this.beforeResume();
        }

        /**
         * Permet de conna�tre si la sc�ne est en pause ou non.
         *
         * @method pause
         * @return {boolean}        Retourne le status "pause" de la sc�ne
         */
        public isPaused() : boolean {
            return this._paused;
        }
    }
}