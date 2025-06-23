const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Stock = require('../models/Stock');

const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.sendStatus(401);
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403);
        req.userId = decoded.id;
        next();
    });
};

router.get('/', auth, async (req, res) => {
    const stocks = await Stock.find({ userId: req.userId });
    res.json(stocks);
});

router.post('/', auth, async (req, res) => {
    const stock = new Stock({ ...req.body, userId: req.userId });
    await stock.save();
    res.status(201).json(stock);
});

module.exports = router;