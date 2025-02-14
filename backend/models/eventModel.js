const { Schema, model } = require('../connection');

const mySchema = new Schema({
    branch: String,
    firstname: String,
    lastname: String,
    roll_no: String,
    clubName: String,
    date: String,
    activity: String,
    createdAt: { type: Date, default: Date.now() }
});

module.exports = model('events', mySchema);