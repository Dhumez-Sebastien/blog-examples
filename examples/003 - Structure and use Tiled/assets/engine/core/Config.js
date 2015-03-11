var Engine;
(function (Engine) {
    var Config = (function () {
        function Config() {
        }
        Config.calculateOffset = function () {
            this.offsetX = (Engine.Config.gameScreenX / 2) - (Engine.Config.tileWidth / 2);
            this.offsetY = Engine.Config.tileHeight;
        };
        Config.gameScreenX = 1024;
        Config.gameScreenY = 768;
        Config.tileWidth = 100;
        Config.tileHeight = 50;
        Config.tileTextureWidth = 100;
        Config.tileTextureHeight = 100;
        return Config;
    })();
    Engine.Config = Config;
})(Engine || (Engine = {}));
//# sourceMappingURL=Config.js.map