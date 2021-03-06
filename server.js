const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

const date = require('./date.js');


app.use(express.static(__dirname + '/views/'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/api/timestamp/:date_string?', (req, res) => {
  let date_string = req.params.date_string;
  let dateObj
  if (date_string) {
    dateObj = date.parseDate(date_string + " ");
  } else {
    dateObj = date.parseDate();
  }
  res.json(dateObj);
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
