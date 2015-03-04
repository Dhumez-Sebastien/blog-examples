module Engine {
    export class IntroScene extends Engine.Scene {

        private logo: PIXI.Sprite;

        private _out : boolean = false;

        constructor() {
            super();
            this.setBackgroundColor(0x000000);

            this.logo = PIXI.Sprite.fromImage("assets/images/logo.png");
            this.addChild(this.logo);

            this.logo.scale.x = this.logo.scale.y = SceneManager.defaultWidth/512;


            this.logo.anchor.x = 0.5;
            this.logo.anchor.y = 0.5;
            this.logo.alpha = 0;

            // move the sprite to the center of the screen
            this.logo.position.x = SceneManager.defaultWidth / 2;
            this.logo.position.y = SceneManager.defaultHeight /2;

        }

        public update() {
            super.update();

            if (!this._out) {
                if (this.logo.alpha < 1) {
                    this.logo.alpha += 0.01;
                } else {
                    this._out = true;
                }
            } else {
                if (this.logo.alpha > 0) {
                    this.logo.alpha -= 0.01;
                } else {
                    SceneManager.goToScene('game');
                }
            }
        }
    }
}