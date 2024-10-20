const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());

const data = require('./data/products.json');
app.use(cors());

app.get('/api/products', (req, res) => {
  res.json(data);
});

app.listen(5000, () => {
  console.log('start');
});
