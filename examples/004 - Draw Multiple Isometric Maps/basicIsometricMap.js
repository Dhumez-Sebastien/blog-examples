// Taille du canvas
var canvasWidth = 1024;
var canvasHeight = 768;

// Création du Stage
var stage = new PIXI.Stage(0x000000);

// Création du mode de rendu.
var renderer = PIXI.autoDetectRenderer(canvasWidth, canvasHeight, {
    antialiasing:false,
    transparent:true,
    resolution:1
});

var div = document.getElementById('showExample');

div.appendChild(renderer.view);

// Création du conteneur de la carte
var mapContainer = [];

// Taille des Tiles sur la carte
var tileWidth = 40;
var tileHeight = 20;

// Taille des Tiles sur le tileset
var tileTextureWidth = 40;
var tileTextureHeight = 60;

// Chargement de la texture du tileset
var tilesetTexture = PIXI.Texture.fromImage('ShuriTiles.png');

// Taille total du tileset
var tilesetTextureWidth = 200;
var tilesetTextureHeight = 60;

// Ratio d'aggrandissement/reduction
var scaleRatio = 0.15;

// Décalage perso
var offset = {
    x : canvasWidth / 2,
    y : 50
};

// Largeur/hauteur d'une carte en Tiles
var tilemapWidth = 40;
var tilemapHeight = 40;


for (var y = 0; y < 4; y++) {
    for (var x = 0; x < 4; x++) {
        var map = new PIXI.DisplayObjectContainer();

        map.position.x += (((x - y) * ((tileWidth / 2) * scaleRatio * tilemapWidth) + offset.x));
        map.position.y += (((x + y) * ((tileHeight / 2) * scaleRatio * tilemapHeight) + offset.y));

        // Ajout du conteneur des cartes au stage
        stage.addChild(map);

        mapContainer.push(map);
    }
}

// Tableau contenant la liste des Tiles futurs découpés
var tileList = [];

for (var i = 0; i < tilesetTextureHeight / tileTextureHeight; i++) {
    for (var j = 0; j < tilesetTextureWidth / tileTextureWidth; j++) {

        // Calculate the Tile coordinate to cut
        var tilePosition = new PIXI.Rectangle(j * tileTextureWidth, i * tileTextureHeight, tileTextureWidth, tileTextureHeight);

        // Build the Tile texture
        var tTile = new PIXI.Texture(tilesetTexture.baseTexture, tilePosition);

        // Push the texture into table
        tileList.push(tTile);
    }
}

/**
 * Permet de généré une carte aléatoirement
 *
 * @param width         Largeur de la carte en Tile
 * @param height        Hauteur de la carte en Tile
 * @param tileMin       Numéro minimum des Tiles à utiliser
 * @param tileMax       Numéro maximum des Tiles à utiliser
 * @return {Array}      Renvoie le tableau contenant la carte généré
 */
function generateMap(width, height, tileMin, tileMax) {
    var out = [];

    for (var y = 0; y < height; y++) {

        out.push([]);

        for (var x = 0; x < width; x++) {
            out[y].push([]);

            out[y][x].push(Math.floor((Math.random() * tileMax) + tileMin));
        }
    }

    return out;
}

// Génération de la carte aléatoire
var mapGenerated = generateMap(tilemapWidth, tilemapHeight, 0, 5);

for(var mapList = 0; mapList < mapContainer.length; mapList++) {
// Affichage des Tiles
    for (var y = 0; y < mapGenerated.length; y++) {
        for (var x = 0; x < mapGenerated[y].length; x++) {
            var tile = new PIXI.Sprite(tileList[mapGenerated[y][x]]);

            tile.position.x += ((x - y) * (tileWidth / 2) + offset.x) * scaleRatio;
            tile.position.y += ((x + y) * (tileHeight / 2) + offset.y) * scaleRatio;

            tile.scale.x = tile.scale.y = scaleRatio;

            mapContainer[mapList].addChild(tile);
        }
    }
}

// Démarrage de l'animation
requestAnimFrame(animate);

// Fonction d'animation
function animate() {
    // render the stage
    renderer.render(stage);
    requestAnimFrame(animate);
}