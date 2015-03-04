// Création du rendu
Engine.SceneManager.create(1024, 768, {
    antialiasing:false,
    transparent:true,
    resolution:1
}, 'showExample');

// Création des différentes Scènes du "jeu"
Engine.SceneManager.createScene('game', Engine.GameScene);
Engine.SceneManager.createScene('intro', Engine.IntroScene);

// On entre dans la Scène d'introduction
Engine.SceneManager.goToScene('intro');

var TilesetImage = new Engine.Tileset('assets/images/ayolan-tilesetIsometrique.png');

TilesetImage.on('loaded', function() {

    var randomMap = new Engine.GameMap().randomMap(10, 10, 0, 10);

    console.log('Image Loaded...');
    console.log(this.texture);
});

TilesetImage.load(); // when comment this line, my game works