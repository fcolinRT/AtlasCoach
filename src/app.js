const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1', require('./routes'));

module.exports = app;
