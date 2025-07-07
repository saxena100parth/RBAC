const jwt = require('jsonwebtoken');
const { roles } = require('./db');

// Authentication Middleware
function Authentication(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'token not found' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const user = jwt.verify(token, 'key');
        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
}

// Authorization Middleware Factory
function Authorization(permission) {
    return (req, res, next) => {
        const user = req.user;
        if (!user || !user.role) {
            return res.status(403).json({ error: 'No user role' });
        }
        const roleObj = roles.roles.find(r => r.role === user.role);
        if (!roleObj) {
            return res.status(403).json({ error: 'Role not found' });
        }
        // If no permission required, allow all authenticated users
        if (!permission) return next();
        if (roleObj.permissions.includes(permission)) {
            return next();
        }
        return res.status(403).json({ error: 'don’t have permissions' });
    };
}

module.exports = { Authentication, Authorization };