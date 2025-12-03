const Book = require("../models/Book");

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (e) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Книга не найдена" });
    res.json(book);
  } catch (e) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
};

exports.createBook = async (req, res) => {
  try {
    const { title, author, year } = req.body;
    const book = new Book({ title, author, year });
    await book.save();
    res.status(201).json(book);
  } catch (e) {
    res.status(400).json({ message: "Ошибка при создании книги" });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { title, author, year } = req.body;
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, year },
      { new: true, runValidators: true }
    );
    if (!book) return res.status(404).json({ message: "Книга не найдена" });
    res.json(book);
  } catch (e) {
    res.status(400).json({ message: "Ошибка при обновлении книги" });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: "Книга не найдена" });
    res.json({ message: "Книга удалена" });
  } catch (e) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
};