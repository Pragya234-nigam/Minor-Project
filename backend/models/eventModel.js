const { Schema, model } = require('../connection');

const mySchema = new Schema({
    clubName: String,
    date:String,
    Activity: String,
    createdAt: { type: Date, default: Date.now() }
});

module.exports = model('events', mySchema);