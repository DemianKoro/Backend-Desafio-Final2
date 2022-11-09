const express = require("express");
const { connect } = require("mongoose");
const routerProducts = require('./src/routes/routerProducts.js');
const routerCarts = require('./src/routes/routerCarts.js');
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', routerProducts);
app.use('/api/cart', routerCarts);
app.use('*', (req, res) => {
	const path = req.params;
	const method = req.method;
	res.send({ error: -2, descripcion: `ruta '${path[0]}' método '${method}' no implementada` });
});

try{
	// await connect('mongodb://localhost:27017/ecommerce');
	mongoose.connect("mongodb+srv://lautarxtomas:lautaro123@cluster0.xpais9l.mongodb.net/ecommerce?retryWrites=true&w=majority")
	console.log("Base conectada!!!")
} catch (error) {
	console.log(error)
}

const server = app.listen(PORT, async () => {
	console.log(`Server running on PORT ${PORT}`);
});

server.on('error', err => console.log(err));