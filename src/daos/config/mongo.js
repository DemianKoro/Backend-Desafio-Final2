const connect = require('mongoose').connect;

const uri =
  'mongodb+srv://Demian:HcD10zWhtNgHMQRz@cluster0.qmej3gi.mongodb.net/ecommerce?retryWrites=true&w=majority';

async function connectMongoDb() {
  try {
    const client = await connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Db connectect to', client.connection.name);
  } catch (error) {
    console.error(error);
  }
}

module.exports = connectMongoDb;