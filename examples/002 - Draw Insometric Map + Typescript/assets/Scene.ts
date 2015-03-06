///<reference path="./defLoader.d.ts" />

/**
 * That's used to extends Scenes creation
 */
module Engine {
    export class Scene extends PIXI.Stage {

        /**
         * Check if Scene is already started 1 time
         * @type {boolean}
         * @private
         */
        private _started : boolean = false;


        private paused: boolean = false;
        private updateCB = function () { };

        constructor(color ?: number) {
            super(color || 0x000000);
        }

        /**
         * This function is called before Scene is resume
         */
        public beforeResume() : void {
            // Used by children before resume

            if (!this._started) {
                this.onStart();
                this._started = true;
            }
        }

        /**
         * Used essentially by children when the Scene start for the first time.
         */
        public onStart() : void {

        }

        public onUpdate(updateCB: () => void ) : void {
            this.updateCB = updateCB;
        }

        public update() : void {
            this.updateCB();
        }

        public pause() : void {
            this.paused = true;
        }

        /**
         * Set the pause system to false
         */

        public resume() : void {
            this.paused = false;
            this.beforeResume();
        }

        /**
         * Check if the Scene is actually in pause
         */
        public isPaused() : boolean {
            return this.paused;
        }
    }
}