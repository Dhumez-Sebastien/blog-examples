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
            /**
             * Contient le conteneur des cartes
             *
             * @property _gameMapContainer
             * @type {PIXI.DisplayObjectContainer}
             * @private
             */
            this._gameMapContainer = Engine.GameMap;
            // On ajoute le conteneur de la carte � la Sc�ne de jeu
            this.addChild(this._gameMapContainer);
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
            var assets = 'assets/maps/orthogonal.json';
            var generatedMap = new PIXI.JsonLoader(assets, true);
            generatedMap.on('loaded', function (res) {
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
        };
        /**
         * Permet la mise � jour de la sc�ne.
         * @method update
         */
        GameScene.prototype.update = function () {
            // Monitored code goes here
            stats.begin();
            // Apparition en fondu de la carte
            if (this._gameMapContainer.alpha < 1) {
                this._gameMapContainer.alpha += 0.01;
            }
            _super.prototype.update.call(this);
            stats.end();
        };
        return GameScene;
    })(Engine.Scene);
    Engine.GameScene = GameScene;
})(Engine || (Engine = {}));
//# sourceMappingURL=GameScene.js.map