// import knexLib from "knex";
const knexLib = require ('knex');
const knex = require('../config/mysql.js');

class Product {
    constructor(config) {
        this.knex = knexLib(config)
    }

    crearTabla() {
        return this.knex.schema.dropTableIfExists('products')
          .finally(()=>{
            return this.knex.schema.createTable('products', table => {
                table.increments('id').primary();
                table.string('name', 50).notNullable();
                table.float('price');
                table.integer('stock');
                table.string('code', 10).notNullable();
                table.string('image', 100).notNullable();
                table.string('timestamp', 50).notNullable();
                table.string('description').notNullable();
            })
          })
    }

    save(product) {
        console.log("Product save in DB SQL Ecommerce")
        return this.knex('products').insert(product);
    }

    getAll() {
        return this.knex('products').select('*');
    }


    getById(id) {
        return this.knex('products').where('id', id).select();
    }


    deleteById(id) {
        return this.knex('products').where('id', id).del();
    }

    deleteAll() {
        return this.knex('products').del();
    }

    close() {
        this.knex.destroy();
      }

}

module.exports = Product;

