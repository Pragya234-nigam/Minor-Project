const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/dsmnruclubs';
// const url = 'mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/clubsminor?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(url)
    .then((result) => {
        console.log('database connected');

    }).catch((err) => {
        console.log(err);

    });
module.exports = mongoose;