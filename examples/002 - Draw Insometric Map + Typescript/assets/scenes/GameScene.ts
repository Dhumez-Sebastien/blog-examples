///<reference path="./../defLoader.d.ts" />

/**
 * GameScene
 *
 * @module :: GameScene
 * @description	:: Classe permettant de cr�e la sc�ne de "jeu" de l'exemple.
 */

module Engine {
    export class GameScene extends Engine.Scene {

        /**
         * Contient le conteneur des cartes
         *
         * @property _gameMapContainer
         * @type {PIXI.DisplayObjectContainer}
         * @private
         */
        private _gameMapContainer: PIXI.DisplayObjectContainer = Engine.GameMap;

        /**
         * Constructeur
         */
        constructor() {
            super();

            // On ajoute le conteneur de la carte � la Sc�ne de jeu
            this.addChild(this._gameMapContainer);
        }

        /**
         * Cette m�thode permet l'�xecution de param�tres lors du premier d�marrage de la sc�ne uniquement.
         * @method onStart
         */
        public onStart() : void {
            super.onStart();

            // On calcule le d�calage de la carte afin qu'elle soit centr� correctement
            Engine.Config.calculateOffset();

            // Taille de la carte en Tile
            var mapWidth : number = 10,
                mapHeight : number = 10;

            // G�n�ration de la carte
            var generatedMap : any = {
                data : Engine.Utils.generateMap(mapWidth, mapHeight, 0, 10),
                url : 'assets/images/ayolan-tilesetIsometrique.png',
                width : mapWidth,
                height : mapHeight
            };

            // Puis on lance son chargement
            Engine.GameMap.loadMap(generatedMap);

            // On cache le conteneur de la carte par d�faut
            this._gameMapContainer.alpha = 0;
        }

        /**
         * Permet la mise � jour de la sc�ne.
         * @method update
         */
        public update() : void {
            // Monitored code goes here
            stats.begin();

            // Apparition en fondu de la carte
            if (this._gameMapContainer.alpha < 1) {
                this._gameMapContainer.alpha += 0.01;
            }

            super.update();

            stats.end();
        }
    }
}