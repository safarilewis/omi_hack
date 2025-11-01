const express = require('express');
const app = express();
const PORT = 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('<h1>Hello from your Express server!</h1>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});