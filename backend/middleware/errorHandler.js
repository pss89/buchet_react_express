const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: '서버 오류 발생', error: err.message });
};

module.exports = errorHandler;
