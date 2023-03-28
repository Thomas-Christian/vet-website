"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());
app.use('/api/organizations', require('./controllers/organizationsController'));
app.listen(process.env.PORT || 5000, () => console.log(`listening`));
mongoose.connect('mongodb://localhost:27017/', options)
    .then(() => console.log("Connected to Database"))
    .catch((error) => console.error(error));
//NOT FOUND
app.get('*', (req, res) => {
    res.status(404);
    res.send({ message: `Page Not Found` });
});