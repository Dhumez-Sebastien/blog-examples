///<reference path="./../defLoader.d.ts" />

/**
 * IntroScene
 *
 * @module :: IntroScene
 * @description	:: Classe permettant de crée la scène d'introduction de l'exemple.
 */

module Engine {
    export class IntroScene extends Engine.Scene {

        /**
         * Contient le logo de Pixi.js qui est affiché lors du démarrage de la scène
         *
         * @property _logo
         * @type {object}
         * @private
         */
        private _logo: PIXI.Sprite;

        /**
         * Cette variable permet de connaître si l'animation est en phase d'apparition ou disparition.
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

            // On charge le logo de Pixi.js puis on l'ajoute à la Scène
            this._logo = PIXI.Sprite.fromImage("assets/images/logo.png");
            this.addChild(this._logo);

            // On fait un aggrandissement sur le logo de Pixi afin qu'il ai la taille de la scène
            this._logo.scale.x = this._logo.scale.y = SceneManager.defaultWidth / (SceneManager.defaultWidth / 2);

            // On prend comme point d'accroche le centre de l'image
            this._logo.anchor.x = this._logo.anchor.y = 0.5;

            // On rend le logo transparent afin d'avoir un effet de fondu lors de l'ouverture de la page
            this._logo.alpha = 0;

            // On déplace le logo au centre de l'écran
            this._logo.position.x = SceneManager.defaultWidth / 2;
            this._logo.position.y = SceneManager.defaultHeight /2;
        }

        /**
         * Permet la mise à jour de la scène.
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