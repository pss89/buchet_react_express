const db = require('../config/db');

const getAllUsers = async () => {
  const [rows] = await db.query('SELECT * FROM users');
  return rows;
};

const createUser = async (name, email) => {
  const [result] = await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
  return { id: result.insertId, name, email };
};

module.exports = {
  getAllUsers,
  createUser,
};