var Engine;
(function (Engine) {
    var Tileset = (function () {
        function Tileset() {
        }
        Tileset.getTileset = function (tilesetUrl) {
            if (this._tilesetList[tilesetUrl]) {
                if (this._tilesetList[tilesetUrl].isReady()) {
                    return this._tilesetList[tilesetUrl];
                }
                else {
                    throw ('Tileset is not ready : ' + tilesetUrl);
                }
            }
            else {
                throw ('Unknown Tileset : ' + tilesetUrl);
            }
        };
        Tileset.load = function (tilesetList) {
            if (tilesetList.length > 0) {
                for (var i = 0, ls = tilesetList.length; i < ls; i++) {
                    if (!this._tilesetList[tilesetList[i]]) {
                        this._tilesetList[tilesetList[i]] = new Engine.TilesetLoader(tilesetList[i]);
                    }
                }
            }
        };
        Tileset.onReady = function (tilesetUrl, cb) {
            if (this._tilesetList[tilesetUrl]) {
                this._tilesetList[tilesetUrl].onReady(cb);
            }
            else {
                throw ('Unknown Tileset : ' + tilesetUrl);
            }
        };
        Tileset._tilesetList = {};
        return Tileset;
    })();
    Engine.Tileset = Tileset;
})(Engine || (Engine = {}));
//# sourceMappingURL=Tileset.js.map