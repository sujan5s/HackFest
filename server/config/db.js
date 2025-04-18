const mongoose = require('mongoose');

module.exports = () => {
    try {
        mongoose.connect(process.env.DB);
        console.log('Connected to database');
    } catch (err) {
        console.error(`Error connecting to the database.\n${err}`);
    }
};
