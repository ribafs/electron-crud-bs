module.exports = class Products extends (require("../Crud")) {

    getConfig() {
        return {
            sort: "name",
            fields: {
                "name": {label: "Product Name", type: "text"},
                "vat": {label: "Vat", type: "select", options: ["7%", "19%"], onChange: this.changeVat},
                "quantity": {label: "Quantity", type: "integer"},
                "price_gross": {label: "Price (gross)", type: "currency", onChange: this.changePriceGross},
                "price_net": {label: "Price (net)", type: "currency", onChange: this.changePriceNet}
            },
            list: ["name", "quantity", "vat", "price_gross", "price_net"]
        }
    }

    changeVat(data) {
        return data
    }

    changePriceGross(data) {
        return data
    }

    changePriceNet(data) {
        return data
    }
}