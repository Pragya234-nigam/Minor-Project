const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/dsmnruclubs';

mongoose.connect(url)
    .then((result) => {
        console.log('database connected');

    }).catch((err) => {
        console.log(err);

    });

module.exports = mongoose;