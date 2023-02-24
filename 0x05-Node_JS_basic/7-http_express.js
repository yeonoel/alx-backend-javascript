const express = require('express');

const DATABASE = process.argv[2];
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send(200, 'Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const message = 'This is list of our students\n';
  try {
    const students = await countStudents(DATABASE);
    res.send(200, `${message}${students.join('\n')}`);
  } catch (error) {
    res.send(500, `${message}${error.message}`);
  }
});

app.listen(port, () => {

});

module.exports = app;
