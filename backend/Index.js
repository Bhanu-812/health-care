const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();

// Enable CORS
app.use(cors());

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/healthcare', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});

app.use('/api/auth', authRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
