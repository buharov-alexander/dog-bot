const express = require('express');

const app = express();
const port = 8080;

app.get('/*', (req, res) => {
  res.type('html');
  res.send('<h1>Hello world</h1>');
});

app.listen(port, () => console.log(`Application start on http://localhost:${port}`));