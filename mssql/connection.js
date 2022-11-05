require('dotenv').config();
const mssql = require('mssql');

class DBConnection {
  async getConnection() {
    try {
      return await mssql.connect({
        server: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: parseInt(process.env.DB_PORT),
        requestTimeout: 90000,
          options: {
          trustServerCertificate: true,
        }
      });
    }
    catch (error) {
      console.log(error);
    }
  }
}
module.exports = new DBConnection();