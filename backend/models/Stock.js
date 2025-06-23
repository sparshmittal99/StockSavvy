const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    symbol: String,
    price: Number,
    alertAbove: Number,
    alertBelow: Number,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Stock', StockSchema);