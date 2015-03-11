var Engine;
(function (Engine) {
    var SceneManager = (function () {
        function SceneManager() {
        }
        SceneManager.create = function (width, height, rendererOptions, divId) {
            if (SceneManager.renderer) {
                return SceneManager;
            }
            SceneManager.defaultWidth = SceneManager.width = width;
            SceneManager.defaultHeight = SceneManager.height = height;
            SceneManager.renderer = PIXI.autoDetectRenderer(SceneManager.width, SceneManager.height, rendererOptions);
            if (divId) {
                document.getElementById(divId).appendChild(SceneManager.renderer.view);
            }
            else {
                document.body.appendChild(SceneManager.renderer.view);
            }
            requestAnimFrame(SceneManager.loop);
            return this;
        };
        SceneManager.loop = function () {
            requestAnimFrame(function () {
                SceneManager.loop();
            });
            if (!this.currentScene || this.currentScene.isPaused())
                return;
            this.currentScene.update();
            this.renderer.render(this.currentScene);
        };
        SceneManager.createScene = function (id, CScene) {
            if (SceneManager._scenes[id]) {
                return void 0;
            }
            SceneManager._scenes[id] = new CScene();
            return SceneManager._scenes[id];
        };
        SceneManager.goToScene = function (id) {
            if (SceneManager._scenes[id]) {
                if (SceneManager.currentScene) {
                    SceneManager.currentScene.pause();
                }
                SceneManager.currentScene = SceneManager._scenes[id];
                SceneManager.currentScene.resume();
                return true;
            }
            return false;
        };
        SceneManager._scenes = {};
        return SceneManager;
    })();
    Engine.SceneManager = SceneManager;
})(Engine || (Engine = {}));
//# sourceMappingURL=SceneManager.js.map