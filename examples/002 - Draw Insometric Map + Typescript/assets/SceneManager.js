/**
 * That's Manage all Game Scenes
 */
var Engine;
(function (Engine) {
    var SceneManager = (function () {
        function SceneManager() {
        }
        // Build Scene Manager
        SceneManager.create = function (width, height, rendererOptions, divId, scale) {
            if (scale === void 0) { scale = false; }
            if (SceneManager.renderer)
                return SceneManager;
            SceneManager.defaultWidth = SceneManager.width = width;
            SceneManager.defaultHeight = SceneManager.height = height;
            SceneManager.renderer = PIXI.autoDetectRenderer(SceneManager.width, SceneManager.height, rendererOptions);
            if (divId) {
                document.getElementById(divId).appendChild(SceneManager.renderer.view);
            }
            else {
                document.body.appendChild(SceneManager.renderer.view);
            }
            if (scale) {
                SceneManager._rescale();
                window.addEventListener("resize", SceneManager._rescale, false);
            }
            requestAnimFrame(SceneManager.loop);
            return this;
        };
        /**
         * Resize game
         * @author          Dhumez Sébastien
         */
        SceneManager._rescale = function () {
            SceneManager.ratio = Math.min(window.innerWidth / SceneManager.defaultWidth, window.innerHeight / SceneManager.defaultHeight);
            SceneManager.width = SceneManager.defaultWidth * SceneManager.ratio;
            SceneManager.height = SceneManager.defaultHeight * SceneManager.ratio;
            SceneManager.renderer.resize(SceneManager.width, SceneManager.height);
        };
        // Apply ratio
        SceneManager._applyRatio = function (displayObj, ratio) {
            if (ratio == 1) {
                return;
            }
            var object = displayObj;
            object.position.x = object.position.x * ratio;
            object.position.y = object.position.y * ratio;
            object.scale.x = object.scale.x * ratio;
            object.scale.y = object.scale.y * ratio;
            for (var i = 0; i < object.children.length; i++) {
                SceneManager._applyRatio(object.children[i], ratio);
            }
        };
        SceneManager.loop = function () {
            requestAnimFrame(function () {
                SceneManager.loop();
            });
            if (!this.currentScene || this.currentScene.isPaused())
                return;
            this.currentScene.update();
            //this._applyRatio(this.currentScene, this.ratio);
            this.renderer.render(this.currentScene);
            //this._applyRatio(this.currentScene, 1 / this.ratio);
        };
        SceneManager.createScene = function (id, CScene) {
            if (SceneManager.scenes[id])
                return undefined;
            SceneManager.scenes[id] = new CScene();
            return SceneManager.scenes[id];
        };
        /**
         * Get a specific Scene by her Id
         *
         * @param id        If of Scene
         */
        SceneManager.getScene = function (id) {
            return SceneManager.scenes[id] || false;
        };
        SceneManager.goToScene = function (id) {
            if (SceneManager.scenes[id]) {
                if (SceneManager.currentScene)
                    SceneManager.currentScene.pause();
                SceneManager.currentScene = SceneManager.scenes[id];
                SceneManager.currentScene.resume();
                return true;
            }
            return false;
        };
        // Contain all Game Scenes
        SceneManager.scenes = {};
        // Offset ratio
        SceneManager.ratio = 1;
        return SceneManager;
    })();
    Engine.SceneManager = SceneManager;
})(Engine || (Engine = {}));
//# sourceMappingURL=SceneManager.js.map