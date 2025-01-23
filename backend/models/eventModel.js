const { Schema, model } = require('../connection');

const mySchema = new Schema({
   
    createdAt: { type: Date, default: Date.now() }
});

module.exports = model('event', mySchema);