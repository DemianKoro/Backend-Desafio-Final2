const { Schema } = require('mongoose');
const Container = require('../dbContainers/containerMongoDB.js');

class Products extends Container { // EXTEND DEL CONTAINER DE MONGODB
	constructor() {
		super('products', new Schema(
			{
				name: { type: String, require: true },
				description: { type: String, require: true },
				code: { type: Number, require: true },
				pic: { type: String, require: true },
				price: { type: Number, require: true },
				stock: { type: Number, require: true }
			},
			{ timestamps: true }
		));
	}
}

module.exports = Products;


// CREO QUE HABRIA QUE CAMBIAR ESTO POR UN MODELO DE FIREBASE (???)