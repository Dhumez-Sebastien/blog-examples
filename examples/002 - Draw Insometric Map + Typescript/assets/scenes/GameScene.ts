///<reference path="./../defLoader.d.ts" />

/**
 * GameScene
 *
 * @module :: GameScene
 * @description	:: Classe permettant de crée la scène de "jeu" de l'exemple.
 */

module Engine {
    export class GameScene extends Engine.Scene {

        /**
         * Constructeur
         */
        constructor() {
            super();

            // On ajoute le conteneur qui doit contenir les cartes de l'exemple à la scène.
            this.addChild(Engine.GameMap.container);
        }

        /**
         * Cette méthode permet l'éxecution de paramètres lors du premier démarrage de la scène uniquement.
         * @method onStart
         */
        public onStart() : void {
            super.onStart();

            // On calcule le décalage de la carte afin qu'elle soit centré correctement
            Engine.Config.calculateOffset();

            // Génération de la carte
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
         * Permet la mise à jour de la scène.
         * @method update
         */
        public update() : void {
            super.update();
        }
    }
}