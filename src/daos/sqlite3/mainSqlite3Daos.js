// import ClienteSql from './productsqlite3.daos.js'
// import { options2 } from '../config/SQLite3.js';

const Product = require('./productsqlite3.daos.js')
const knex = require('../config/SQLite3.js')


const sqlite = new Product(knex);


