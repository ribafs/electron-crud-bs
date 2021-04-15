const Events = require("../utils/Events")
const {dialog} = require('electron').remote

const settingsKey = "settings"
module.exports = class Settings extends (require("../Component")) {

    constructor(componentName, renderer) {
        super(componentName, renderer)
        if (!this.load()) {
            this.save()
        }
        Events.delegate(document.body, "click", "#settingsForm #storageFolder", () => {
            const value = this.renderer.settings.dataStorageFolder
            const result = dialog.showOpenDialog({defaultPath: value, properties: ['openDirectory', 'createDirectory']})
            let newValue
            if(result) newValue = result[0]
            if(newValue && newValue !== value) {
                document.getElementById("storageFolder").value = newValue
                document.getElementById("settingsSubmitButton").disabled = false
            }
        })
        Events.delegate(document.body, "input", "#settingsForm input", () => {
            document.getElementById("settingsSubmitButton").disabled = false
        })
        Events.delegate(document.body, "submit", "#settingsForm", (event) => {
            event.preventDefault()
            this.transferFormData()
            this.save()
            document.getElementById("settingsSubmitButton").disabled = true
        })
    }

    render() {
        return `
        <h1>Configurações</h1>
        <form id="settingsForm">
          <div class="form-group">
            <label for="storageFolder">Pasta que armazena os dados</label>
            <input readonly value="${this.renderer.settings.dataStorageFolder}" type="text" class="form-control" id="storageFolder">
            <small class="form-text text-muted">A pasta usada para armazenar os dados enste exemplo</small>
          </div>
          <div class="form-group">
            <label for="exampleText">Texto</label>
            <input type="text" value="${this.renderer.settings.exampleText}" class="form-control" id="exampleText" aria-describedby="exampleText" placeholder="Digite o texto">
            <small class="form-text text-muted">Este texto será exibido na view Texto</small>
          </div>
          <button id="settingsSubmitButton" type="submit" class="btn btn-primary" disabled>Salvar</button>
        </form>`
    }

    transferFormData() {
        this.renderer.settings.dataStorageFolder = document.getElementById("storageFolder").value
        this.renderer.settings.exampleText = document.getElementById("exampleText").value

    }

    load() {
        if (localStorage.getItem(settingsKey)) {
            this.renderer.settings = JSON.parse(localStorage.getItem(settingsKey))
            return true
        } else {
            return false
        }
    }

    save() {
        localStorage.setItem(settingsKey, JSON.stringify(this.renderer.settings))
    }

}
