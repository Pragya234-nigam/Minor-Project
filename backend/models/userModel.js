const { Schema, model } = require('../connection');

const mySchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    roll_no: String,
    branch:String,
    contact:String,
    clubName: String,
    createdAt: { type: Date, default: Date.now() }
});

module.exports = model('students', mySchema);