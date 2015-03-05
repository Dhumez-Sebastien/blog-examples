module Engine {
    export class GameScene extends Engine.Scene {

        constructor() {
            super();

            var TilesetImage = new Engine.Tileset('assets/images/ayolan-tilesetIsometrique.png');

            TilesetImage.on('loaded', function() {
                var randomMap = new Engine.Map().randomMap(10, 10, 0, 10);

                console.log('Image Loaded...');
                console.log(this.texture);
            });

            TilesetImage.load(); // when comment this line, my game works

            this.addChild(Engine.GameMap.container);
        }


        public update() : void {
            super.update();
        }
    }
}