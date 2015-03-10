var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Engine;
(function (Engine) {
    var GameScene = (function (_super) {
        __extends(GameScene, _super);
        function GameScene() {
            _super.call(this);
            this._gameMapContainer = Engine.GameMap;
            this.addChild(this._gameMapContainer);
        }
        GameScene.prototype.onStart = function () {
            _super.prototype.onStart.call(this);
            Engine.Config.calculateOffset();
            var mapWidth = 10, mapHeight = 10;
            var generatedMap = {
                data: Engine.Utils.generateMap(mapWidth, mapHeight, 0, 10),
                url: 'assets/images/ayolan-tilesetIsometrique.png',
                width: mapWidth,
                height: mapHeight
            };
            Engine.GameMap.loadMap(generatedMap);
            this._gameMapContainer.alpha = 0;
        };
        GameScene.prototype.update = function () {
            stats.begin();
            if (this._gameMapContainer.alpha < 1) {
                this._gameMapContainer.alpha += 0.01;
            }
            _super.prototype.update.call(this);
            stats.end();
        };
        return GameScene;
    })(Engine.Scene);
    Engine.GameScene = GameScene;
})(Engine || (Engine = {}));
//# sourceMappingURL=GameScene.js.map