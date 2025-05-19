require('dotenv').config();

const path = require('path');


// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.get('/api/resources', (req, res) => {
  res.json([
    {id: 1, name: "Sensory Tools", url: "/sensory.html"},
    {id: 2, name: "Learning Aids", url: "/learning.html"}
  ]);
});

// Contact form handling
app.post('/api/contact', express.json(), (req, res) => {
  // Add email sending logic here
  console.log('Contact form submission:', req.body);
  res.send({status: 'Message received!'});
});

const any = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

// Database connection
require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/api', require('./routes/api'));

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});