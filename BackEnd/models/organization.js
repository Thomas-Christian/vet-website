"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const { Schema } = mongoose;
const organizationSchema = new Schema({
    name: {
        type: String
    },
    website: {
        type: String
    },
    image: {
        type: String
    },
    mission: {
        type: String
    },
    tags: {
        type: Array
    },
    totalRatings: {
        type: Number
    },
    rating: {
        type: Number
    }
});
//EXPORT
module.exports = mongoose.model('Organization', organizationSchema);
