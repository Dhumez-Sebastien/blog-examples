module Engine {
    export class Tileset extends PIXI.ImageLoader {

        constructor(tilesetUrl : string) {
            super(tilesetUrl, true);
        }
    }
}