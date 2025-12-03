const User = require("../models/User");
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (e) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
};
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user)
      return res.status(404).json({ message: "Пользователь не найден" });
    res.json(user);
  } catch (e) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
};
exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, username } = req.body;
    const user = new User({ firstName, lastName, username });
    await user.save();
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ message: "Ошибка при создании пользователя" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { firstName, lastName, username } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, username },
      { new: true, runValidators: true }
    );
    if (!user)
      return res.status(404).json({ message: "Пользователь не найден" });
    res.json(user);
  } catch (e) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user)
      return res.status(404).json({ message: "Пользователь не найден" });
    res.json({ message: "Пользователь удалён" });
  } catch (e) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
};
