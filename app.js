const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');

var bodyParser = require('body-parser');
const fs = require('fs');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if(!token) return res.status(401).json({message: 'Unauthorized'});

    try {
        const decoded = jwt.verify(token, 'your-secret-key');
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({message: 'Invalid token'})
    }
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/users', require('./routes/users'));
app.use('/feeds', require('./routes/feeds'));
app.use('/logs', require('./routes/logs'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

module.exports = app;