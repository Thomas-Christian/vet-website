require("dotenv").config();
const path = require ('path')
import { Request, Response } from 'express';
import express = require('express');
import mongoose = require('mongoose');
import cors = require('cors');

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

app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/api/organizations', require ('./controllers/organizationsController'));
app.use('/api/users', require ('./controllers/userController'))

app.listen(process.env.PORT || 5000, () => console.log(`listening`));


mongoose.connect('mongodb://localhost:27017/', options)
    .then(() => console.log("Connected to Database"))
    .catch((error: Error) => console.error(error));

//NOT FOUND
app.get('*', (req: Request, res: Response) => {
    res.status(404)
    res.send({ message: `Page Not Found` })
})