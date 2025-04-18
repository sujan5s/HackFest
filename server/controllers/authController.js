const registerModel = require('../models/register');

exports.register = async (req, res) => {
  try {
    const newUser = await registerModel.create(req.body);
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await registerModel.findOne({ username });
    if (!user) return res.json("User not found");

    if (user.password === password) {
      res.json({
        message: "OK",
        user: {
          id: user._id,
          username: user.username,
          name: user.name,
          email: user.email
        }
      });
    } else {
      res.json("incorrect password");
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.profile = async (req, res) => {
  try {
    const user = await registerModel.findById(req.query.id).select('username name email');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};
