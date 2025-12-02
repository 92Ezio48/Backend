const mongoose = require("mongoose");

const {
  PORT = 3005,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://127.0.0.1:27017/test",
} = process.env;
// Функция для подключения
async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("🟢 Успешное подключение к MongoDB!");
  } catch (error) {
    console.error("Ошибка подключения к MongoDB:", error.message);
    process.exit(1);
  }
}

module.exports = connect;
