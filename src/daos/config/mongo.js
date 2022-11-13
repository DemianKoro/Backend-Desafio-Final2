const connect = require('mongoose').connect;
const dotenv = require('dotenv').config();

const URL = process.env.DB_URL_MONGO;
  
async function connectMongoDb() {
  try {
    const client = await connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.info(
      '\x1b[32m%s\x1b[0m',
      `>>> DataBase connected to ${client.connection.name} 🔋 <<<`
    );
  } catch (error) {
    console.error(error);
  }
}

module.exports = connectMongoDb;