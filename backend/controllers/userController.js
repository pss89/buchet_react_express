const User = require('../models/userModel');

const getUsers = async (req, res, next) => {
  try {
    const users = await User.getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const addUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }
    const newUser = await User.createUser(name, email);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUsers,
  addUser,
};