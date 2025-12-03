const express = require("express");
const connect = require("./db"); //
const app = express();
const logger = require("./middleware/logger");
const cors = require("cors");
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");
require("dotenv").config();
// Подключение к MongoDB:
connect();
app.use(logger);

// Далее твой код роутов, мидлвар и серверного старта
app.use(express.json());
app.use(cors());
app.use("/users", usersRouter);
app.use("/books", booksRouter);

app.listen(3005, () => {
  console.log("Сервер запущен на http://127.0.0.1:3005");
});
