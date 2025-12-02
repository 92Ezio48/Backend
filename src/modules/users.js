const fs = require('fs');
const path = require('path');

// Возвращает JSON-массив пользователей (из файла data/users.json)
function getUsers() {
  const data = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8');
  return JSON.parse(data);
}

// Экспортируем функцию
module.exports = { getUsers };