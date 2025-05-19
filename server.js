require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});