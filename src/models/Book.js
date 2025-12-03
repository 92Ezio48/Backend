const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: { type: Number },
  // Можно добавить поля: genre, userId (владельца), и прочее по необходимости
});

module.exports = mongoose.model("Book", bookSchema);
