// Import the Express module
const express = require('express');

// Initialize the Express application
const app = express();

// Define a port for the server
const PORT = 3000;

// Middleware to parse JSON bodies (optional)
app.use(express.json());

// Define a simple GET route
app.get('/', (req, res) => {
  res.send('Welcome to the Simple API!');
});

app.get('/api', (req, res) => {
    res.send('working')
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
