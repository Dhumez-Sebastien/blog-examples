var Engine;
(function (Engine) {
    var Config = (function () {
        function Config() {
        }
        Config.calculateOffset = function () {
            this.offsetX = 0;
            this.offsetY = 0;
        };
        Config.gameScreenX = 800;
        Config.gameScreenY = 600;
        Config.tileWidth = 32;
        Config.tileHeight = 32;
        Config.tileTextureWidth = 32;
        Config.tileTextureHeight = 32;
        return Config;
    })();
    Engine.Config = Config;
})(Engine || (Engine = {}));
//# sourceMappingURL=Config.js.map