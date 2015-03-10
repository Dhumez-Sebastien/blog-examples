///<reference path="./defLoader.d.ts" />
/**
 * SceneManager
 *
 * @module :: SceneManager
 * @description	:: Classe statique permettant de manager toute les différentes scènes de notre exemple/jeu.
 */
var Engine;
(function (Engine) {
    var SceneManager = (function () {
        function SceneManager() {
        }
        /**
         * Permet la création du système de rendu
         * @method create
         * @static
         *
         * @param width {string}                                Largeur en pixel par défaut du rendu
         * @param height {string}                               Hauteur en pixel par défaut du rendu
         * @param rendererOptions {PIXI.PixiRendererOptions}    Options de rendu de PIXI
         * @param divId {string}                                Id de la div ou doit être ajouter le rendu
         * @return {SceneManager}                               On retourne la classe
         */
        SceneManager.create = function (width, height, rendererOptions, divId) {
            // On vérifie si le rendu est déjà actif
            if (SceneManager.renderer) {
                return SceneManager;
            }
            // On applique les valeur de taille par défaut
            SceneManager.defaultWidth = SceneManager.width = width;
            SceneManager.defaultHeight = SceneManager.height = height;
            // On crée et assigne le rendu
            SceneManager.renderer = PIXI.autoDetectRenderer(SceneManager.width, SceneManager.height, rendererOptions);
            // Si l'utilisateur à soumis une div dans laquelle doit etre ajouter le rendu, on l'utilise, sinon, on ajoute le rendu au document.
            if (divId) {
                document.getElementById(divId).appendChild(SceneManager.renderer.view);
            }
            else {
                document.body.appendChild(SceneManager.renderer.view);
            }
            // On lance le système de rendu
            requestAnimFrame(SceneManager.loop);
            return this;
        };
        /**
         * Cette "boucle sans fin" permet la mise à jour automatique de la scène active.
         * @method loop
         * @static
         */
        SceneManager.loop = function () {
            requestAnimFrame(function () {
                SceneManager.loop();
            });
            // On la scène est en pauve ou qu'aucune scène n'est disposible, on stop
            if (!this.currentScene || this.currentScene.isPaused())
                return;
            // Sinon, mise à jour de la scène active
            this.currentScene.update();
            // Mise à jour du rendu de la scène active
            this.renderer.render(this.currentScene);
        };
        /**
         * Permet la création de scène
         * @method createScene
         * @static
         *
         * @param id {string}       Id de la scène à créer
         * @param CScene {Scene}    Contient la classe de la scène qui va être créer
         * @return {Scene}          Retourne la scène qui vient d'être créer
         */
        SceneManager.createScene = function (id, CScene) {
            // On vérifie si la scène n'existe pas
            if (SceneManager._scenes[id]) {
                return void 0;
            }
            // Si c'est le cas, on l'a crée et l'associe à son id
            SceneManager._scenes[id] = new CScene();
            // Puis on l'a retourne
            return SceneManager._scenes[id];
        };
        /**
         * Permet de changer de scène d'après son id
         * @method goToScene
         * @static
         *
         * @param id {string}       Id de la scène qui doit devenir active
         * @return {boolean}        True si tout s'est bien passé, false si aucun changement n'a eu lieu
         */
        SceneManager.goToScene = function (id) {
            if (SceneManager._scenes[id]) {
                // Si une scène est active, on la met en pause
                if (SceneManager.currentScene) {
                    SceneManager.currentScene.pause();
                }
                // On change de scène puis on l'active
                SceneManager.currentScene = SceneManager._scenes[id];
                SceneManager.currentScene.resume();
                return true;
            }
            return false;
        };
        /**
         * Contient l'ensemble des scènes crée
         *
         * @property _scenes
         * @type {object}
         * @private
         * @static
         */
        SceneManager._scenes = {};
        return SceneManager;
    })();
    Engine.SceneManager = SceneManager;
})(Engine || (Engine = {}));
//# sourceMappingURL=SceneManager.js.map