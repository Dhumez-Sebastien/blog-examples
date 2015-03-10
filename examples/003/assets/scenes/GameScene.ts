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

            // G�n�ration de la carte
            var assets : any = 'assets/maps/orthogonal.json';
            var generatedMap : PIXI.JsonLoader = new PIXI.JsonLoader(assets, true);


            generatedMap.on('loaded', function(res) {
                console.log('Loaded');
                console.log(this.json);
                //console.log(res.content.json);

                // Puis on lance son chargement
                Engine.GameMap.loadMap(this.json);
            });

            // Lancement du chargement
            generatedMap.load();


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