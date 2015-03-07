///<reference path="./defLoader.d.ts" />

/**
 * Scene
 *
 * @module :: Scene
 * @description	:: Classe permettant la création de scène.
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
         * Permet de définir le status de pause de la scène
         * @type {boolean}
         * @private
         */
        private _paused: boolean = false;

        /**
         * Constructeur
         *
         * @param color {number} optional       Permet de définir une couleur d'arrière plan de la scène.
         *                                      Cette couleur doit être au format héxadecimal.
         */
        constructor(color ?: number) {
            super(color || 0xffffff);

        }

        /**
         * This function is called before Scene is resume
         */

        /**
         * Cette fonction est appelé juste avant chaque démarrage de la scène.
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
         * Cette fonction est appelé lors du premier démarrage de la scène. Son appel est donc unique.
         *
         * @method onStart
         */
        public onStart() : void {

        }

        /**
         * Mise à jour de la scène quand celle-ci est active.
         *
         * @method update
         */
        public update() : void {

        }

        /**
         * Permet la mise en pause de la scène.
         *
         * @method pause
         */
        public pause() : void {
            this._paused = true;
        }

        /**
         * Permet la mise en marche de la scène
         *
         * @method pause
         */
        public resume() : void {
            this._paused = false;
            this.beforeResume();
        }

        /**
         * Permet de connaître si la scène est en pause ou non.
         *
         * @method pause
         * @return {boolean}        Retourne le status "pause" de la scène
         */
        public isPaused() : boolean {
            return this._paused;
        }
    }
}