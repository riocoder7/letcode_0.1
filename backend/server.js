// backend/server.js

// Importing dependencies using require (CommonJS)
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081; // Ensure PORT is defined

app.use(cors());
app.use(express.json());  // To parse JSON requests

// Root route to avoid the "Cannot GET /" error
app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

// Your existing route for code execution
app.post('/code_editor', (req, res) => {
  const { code, language } = req.body;

  // Example: Process the code (you can integrate a code execution service)
  const output = `Code executed in ${language} with code: ${code}`;
  console.log(output);
  res.json({ output });
});


app.use((err, req, res, next) => {
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

