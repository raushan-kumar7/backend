require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send("Hello From Server!.");
});

app.get('/twitter', (req, res) => {
  res.send("@kumar_raushan19");
});

app.get('/login', (req, res) => {
  res.send("<h1>Please login.</h1>");
});

app.listen(port, () => {
  console.log(`Server has started on PORT:${port}`);
});