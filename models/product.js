const getDB = require('../lib/database').getDb;

module.exports = class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    save() {
        const db = getDB();
        return db.collection('products')
            .insertOne(this)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }

    static fetchAll() {
        const db = getDB();
        return db.collection('products')
            .find()
            .toArray()
            .then(products => {
                return products;
            })
            .catch(err => {
                console.log(err);
            });
    }
}