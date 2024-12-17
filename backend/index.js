// Import the Express module
const express = require('express');


const Objects = {
  userId: 1,
  id: 1,
  title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}

// Initialize the Express application
const app = express();

const port = process.env.PORT || 5000
// Middleware to parse JSON bodies (optional)
app.use(express.json());

// Define a simple GET route
app.get('/', (req, res) => {
  res.send('Welcome to the Simple API!');
});

app.get('/api', (req, res) => {
    res.send(Objects)
})

// Start the server
app.listen(port, () => {
  console.log(`running`);
});
