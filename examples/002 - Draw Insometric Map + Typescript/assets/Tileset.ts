///<reference path="./defLoader.d.ts" />

module Engine {
    export class Tileset {

        /**
         * Contient la liste des Tilesets actuellement utilisé.
         *
         * @property _tilesetList
         * @type {object}
         * @private
         */
        private static _tilesetList : {} = {};

        public static getTileset(tilesetUrl) : TilesetLoader {
            if (this._tilesetList[tilesetUrl]) {

                if (this._tilesetList[tilesetUrl].isReady()) {
                    return this._tilesetList[tilesetUrl];
                } else {
                    throw('Tileset is not ready : '+tilesetUrl);
                }

            } else {
                throw('Unknown Tileset : '+tilesetUrl);
            }
        }

        public static load(tilesetList : string[]) : void {
            if (tilesetList.length > 0) {
                for (var i : number = 0, ls : number = tilesetList.length; i < ls; i++) {
                    if (!this._tilesetList[tilesetList[i]]) {
                        this._tilesetList[tilesetList[i]] = new Engine.TilesetLoader(tilesetList[i]);
                    }
                }
            }
        }

        public static onReady(tilesetUrl : string, cb : () => void) : void {
            if (this._tilesetList[tilesetUrl]) {

                console.log('Check if is ready');

                if (this._tilesetList[tilesetUrl].isReady()) {
                    console.log('Is ready, send callback');
                    cb();
                } else {
                    console.log('Add callback into list');
                    this._tilesetList[tilesetUrl].onReady(cb);
                }

            } else {
                throw('Unknown Tileset : '+tilesetUrl);
            }
        }
    }
}