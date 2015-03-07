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
         * Constructeur
         */
        constructor() {
            super();

            // On ajoute le conteneur qui doit contenir les cartes de l'exemple � la sc�ne.
            this.addChild(Engine.GameMap.container);
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
            var generatedMap : any = {
                data : Engine.Utils.generateMap(10, 10, 0, 10),
                url : 'assets/images/ayolan-tilesetIsometrique.png',
                width : 10,
                height : 10
            };

            // Puis on lance son chargement
            Engine.GameMap.loadMap(generatedMap);
        }

        /**
         * Permet la mise � jour de la sc�ne.
         * @method update
         */
        public update() : void {
            super.update();
        }
    }
}