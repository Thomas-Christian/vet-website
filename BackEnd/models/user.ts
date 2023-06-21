import mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    passwordDigest: { type: String, required: true }
});

//EXPORT
module.exports = mongoose.model('User', userSchema);