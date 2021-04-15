module.exports = class Crud extends (require("../Component")) {

    render() {
        return `<h1>Um texto configurado em Configurações</h1>${this.renderer.settings.exampleText}`;
    }

}
