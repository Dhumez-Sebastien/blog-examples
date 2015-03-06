// Création du rendu
Engine.SceneManager.create(Engine.Config.gameScreenX, Engine.Config.gameScreenY, {
    antialiasing:false,
    transparent:true,
    resolution:1
}, 'showExample');

// Création des différentes Scènes du "jeu"
Engine.SceneManager.createScene('game', Engine.GameScene);
Engine.SceneManager.createScene('intro', Engine.IntroScene);

// On entre dans la Scène d'introduction
Engine.SceneManager.goToScene('intro');

// On calcule le décalage de la carte afin qu'elle soit centré correctement
Enfine.Config.calculateOffset();