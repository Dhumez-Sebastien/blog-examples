var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Engine;
(function (Engine) {
    var GameMapStatic = (function (_super) {
        __extends(GameMapStatic, _super);
        function GameMapStatic() {
            _super.apply(this, arguments);
        }
        GameMapStatic.prototype.loadMap = function (mapConfig) {
            this.addChild(new Engine.Map(mapConfig));
        };
        return GameMapStatic;
    })(PIXI.DisplayObjectContainer);
    Engine.GameMap = new GameMapStatic();
})(Engine || (Engine = {}));
//# sourceMappingURL=GameMap.js.map