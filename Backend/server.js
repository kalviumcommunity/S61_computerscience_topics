const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const router = require('./routes');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors);
app.use(express.json());
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
    res.send("This is an express app with ping route");
});

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB connection error: ", err));

app.get('/', (req, res) => {
    if (mongoose.connection.readyState === 1) {
        res.send("Connected to MongoDB");
    } else {
        res.send("Did not connect to MongoDB");
    }
});

app.use('/api', router);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
