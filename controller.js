const jwt = require('jsonwebtoken');
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
const { userData } = require('./db');

const login = (req, res) => {
    const { username, password } = req.body;
    const user = userData.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }
    // Issue JWT
    const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, 'key');
    res.json({id: user.id, token });
};


module.exports = {login}