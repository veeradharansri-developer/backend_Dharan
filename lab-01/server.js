// Tasks 4-6: Express server with routes and a 404 handler
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// GET / -> welcome text
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Node.js and Express server!');
});

// GET /about -> JSON with name and section
app.get('/about', (req, res) => {
  res.status(200).json({ name: 'Veera Dharan Sri Datta', section: 'CSE-FSD-2B' });
});

// GET /time -> current date and time
app.get('/time', (req, res) => {
  res.status(200).send(`Current date and time: ${new Date()}`);
});

// 404 handler for any unmatched routes
app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
