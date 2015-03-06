///<reference path="./defLoader.d.ts" />

/**
 * That's Manage all Game Scenes
 */
module Engine {
    export class SceneManager {

        // Contain all Game Scenes
        private static scenes: any = {};

        // Contain the current Scene
        public static currentScene: Engine.Scene;

        // The Pixi Renderer
        public static renderer: any;

        // Offset ratio
        public static ratio: number = 1;

        // The default Size
        public static defaultWidth: number;
        public static defaultHeight: number;

        // The current Size
        public static width: number;
        public static height: number;

        // Build Scene Manager
        public static create(width: number, height: number, rendererOptions : any, divId : string, scale: boolean = false) : SceneManager {
            if (SceneManager.renderer)
                return SceneManager;

            SceneManager.defaultWidth = SceneManager.width = width;
            SceneManager.defaultHeight = SceneManager.height = height;

            SceneManager.renderer = PIXI.autoDetectRenderer(SceneManager.width, SceneManager.height, rendererOptions);

            if (divId) {
                document.getElementById(divId).appendChild(SceneManager.renderer.view);
            } else {
                document.body.appendChild(SceneManager.renderer.view);
            }


            if (scale) {
                SceneManager._rescale();
                window.addEventListener("resize", SceneManager._rescale, false);
            }

            requestAnimFrame(SceneManager.loop);

            return this;
        }

        /**
         * Resize game
         * @author          Dhumez Sébastien
         */

        private static _rescale() : void
        {
            SceneManager.ratio = Math.min(window.innerWidth / SceneManager.defaultWidth, window.innerHeight / SceneManager.defaultHeight)
            SceneManager.width = SceneManager.defaultWidth * SceneManager.ratio;
            SceneManager.height = SceneManager.defaultHeight * SceneManager.ratio;
            SceneManager.renderer.resize(SceneManager.width, SceneManager.height);
        }

        // Apply ratio
        public static _applyRatio(displayObj: Scene, ratio: number) {
            if (ratio == 1) {
                return;
            }

            var object: any = displayObj;
            object.position.x = object.position.x * ratio;
            object.position.y = object.position.y * ratio;
            object.scale.x = object.scale.x * ratio;
            object.scale.y = object.scale.y * ratio;

            for (var i = 0; i < object.children.length; i++) {
                SceneManager._applyRatio(object.children[i], ratio);
            }
        }
        private static loop() {
            requestAnimFrame(function () { SceneManager.loop() });

            if (!this.currentScene || this.currentScene.isPaused()) return;

            this.currentScene.update();

            //this._applyRatio(this.currentScene, this.ratio);
            this.renderer.render(this.currentScene);
            //this._applyRatio(this.currentScene, 1 / this.ratio);

        }

        public static createScene(id: string, CScene: any): Scene {
            if (SceneManager.scenes[id])
                return undefined;

            SceneManager.scenes[id] = new CScene();

            return SceneManager.scenes[id];
        }

        /**
         * Get a specific Scene by her Id
         *
         * @param id        If of Scene
         */
        public static getScene(id : string) : any {
            return SceneManager.scenes[id] || false;
        }

        public static goToScene(id: string): boolean {

            if (SceneManager.scenes[id]) {
                if (SceneManager.currentScene)
                    SceneManager.currentScene.pause();

                SceneManager.currentScene = SceneManager.scenes[id];
                SceneManager.currentScene.resume();
                return true;
            }
            return false;
        }
    }
}