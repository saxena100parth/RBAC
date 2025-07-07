const PORT = 3000
const express = require('express')
const {login} = require('./controller')
// const jwt = require('jsonwebtoken');
// const {userData, roles} = require('./db')
const { Authentication, Authorization } = require('./middleware');

const app = express();

app.use(express.json())

app.post('/login', login)

//  only Admins
app.get('/admin-dashboard', Authentication, Authorization('view_admin_dashboard'), (req, res, next) => {
    try {
        res.json({ message: 'Admin Dashboard', user: req.user });
    } catch (err) {
        next(err);
    }
});
// Admins and Managers
app.get('/manager-dashboard', Authentication, Authorization('view_manager_dashboard'), (req, res, next) => {
    try {
        res.json({ message: 'Manager Dashboard', user: req.user });
    } catch (err) {
        next(err);
    }
});
//  all authenticated users
app.get('/user-dashboard', Authentication, Authorization('view_user_dashboard'), (req, res, next) => {
    try {
        res.json({ message: 'User Dashboard', user: req.user });
    } catch (err) {
        next(err);
    }
});

// 404 handler (must be after all routes)
app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found' });
});

// 500 handler (must be last)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log(`server is runing on PORT ${PORT}`);
});
