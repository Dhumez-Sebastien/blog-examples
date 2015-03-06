///<reference path="./../defLoader.d.ts" />

/**
 * IntroScene
 *
 * @module :: IntroScene
 * @description	:: Classe permettant de cr�e la sc�ne d'introduction de l'exemple.
 */

module Engine {
    export class IntroScene extends Engine.Scene {

        /**
         * Contient le logo de Pixi.js qui est affich� lors du d�marrage de la sc�ne
         *
         * @property _logo
         * @type {object}
         * @private
         */
        private _logo: PIXI.Sprite;

        /**
         * Cette variable permet de conna�tre si l'animation est en phase d'apparition ou disparition.
         *
         * @property _tilesetList
         * @type {object}
         * @private
         */
        private _out : boolean = false;

        /**
         * Constructeur
         */
        constructor() {
            super();

            this._logo = PIXI.Sprite.fromImage("assets/images/logo.png");
            this.addChild(this._logo);

            this._logo.scale.x = this._logo.scale.y = SceneManager.defaultWidth/512;


            this._logo.anchor.x = 0.5;
            this._logo.anchor.y = 0.5;
            this._logo.alpha = 0;

            // move the sprite to the center of the screen
            this._logo.position.x = SceneManager.defaultWidth / 2;
            this._logo.position.y = SceneManager.defaultHeight /2;

        }

        /**
         * Permet la mise � jour de la sc�ne.
         * @method update
         */
        public update() : void {
            super.update();

            if (!this._out) {
                if (this._logo.alpha < 1) {
                    this._logo.alpha += 0.01;
                } else {
                    this._out = true;
                }
            } else {
                if (this._logo.alpha > 0) {
                    this._logo.alpha -= 0.01;
                } else {
                    SceneManager.goToScene('game');
                }
            }
        }
    }
}