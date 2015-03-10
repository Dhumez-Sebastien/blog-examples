var stats = new Stats();
stats.setMode(1); // 0: fps, 1: ms

// align top-left
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';

document.body.appendChild( stats.domElement );

// Cr�ation du rendu
Engine.SceneManager.create(Engine.Config.gameScreenX, Engine.Config.gameScreenY, {
    antialiasing:false,
    transparent:true,
    resolution:1
}, 'showExample');

// Cr�ation des diff�rentes Sc�nes du "jeu"
Engine.SceneManager.createScene('game', Engine.GameScene);
Engine.SceneManager.createScene('intro', Engine.IntroScene);

// On entre dans la Sc�ne d'introduction
Engine.SceneManager.goToScene('intro');