module.exports = function (req, res, next) {
  console.log("Запрос:", req.method, req.originalUrl);
  next();
};
