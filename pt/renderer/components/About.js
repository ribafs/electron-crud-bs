module.exports = class About extends (require("../Component")) {
    render() {
        return `
        <h1>CRUD com Electron, JSON e Bootstrap</h1>
        <p>Um projeto inicial para a criação de aplicativos com Electron e Bootstrap 4.</p>
        <p><b>License:</b> MIT; &copy; 2018 <a target="_blank" href="https://shaack.com">shaack.com</a>, all rights reserved</p>
        <h2>Features</h2>
        <ul>
        <li>Bootstrap 4</li>
        <li>Component architecture</li>
        <li>Simple reactive behaviour (without React, Angular etc.)</li>
        <li>Font-Awesome 5 integration</li>
        <li>CRUD example with JSON storage in file</li>
        <li>Settings component with persistent storage</li>
        </ul>
        `
    }
}
