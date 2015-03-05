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
            var TilesetImage = new Engine.Tileset('assets/images/ayolan-tilesetIsometrique.png');
            TilesetImage.on('loaded', function () {
                var randomMap = new Engine.Map().randomMap(10, 10, 0, 10);
                console.log('Image Loaded...');
                console.log(this.texture);
            });
            TilesetImage.load(); // when comment this line, my game works
            this.addChild(Engine.GameMap.container);
        }
        GameScene.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return GameScene;
    })(Engine.Scene);
    Engine.GameScene = GameScene;
})(Engine || (Engine = {}));
//# sourceMappingURL=GameScene.js.map