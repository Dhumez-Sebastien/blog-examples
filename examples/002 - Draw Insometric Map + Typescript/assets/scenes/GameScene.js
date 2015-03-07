///<reference path="./../defLoader.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * GameScene
 *
 * @module :: GameScene
 * @description	:: Classe permettant de cr�e la sc�ne de "jeu" de l'exemple.
 */
var Engine;
(function (Engine) {
    var GameScene = (function (_super) {
        __extends(GameScene, _super);
        /**
         * Constructeur
         */
        function GameScene() {
            _super.call(this);
            // On ajoute le conteneur qui doit contenir les cartes de l'exemple � la sc�ne.
            this.addChild(Engine.GameMap.container);
        }
        /**
         * Cette m�thode permet l'�xecution de param�tres lors du premier d�marrage de la sc�ne uniquement.
         * @method onStart
         */
        GameScene.prototype.onStart = function () {
            _super.prototype.onStart.call(this);
            // On calcule le d�calage de la carte afin qu'elle soit centr� correctement
            Engine.Config.calculateOffset();
            // G�n�ration de la carte
            var generatedMap = {
                data: Engine.Utils.generateMap(10, 10, 0, 10),
                url: 'assets/images/ayolan-tilesetIsometrique.png',
                width: 10,
                height: 10
            };
            // Puis on lance son chargement
            Engine.GameMap.loadMap(generatedMap);
        };
        /**
         * Permet la mise � jour de la sc�ne.
         * @method update
         */
        GameScene.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return GameScene;
    })(Engine.Scene);
    Engine.GameScene = GameScene;
})(Engine || (Engine = {}));
//# sourceMappingURL=GameScene.js.map