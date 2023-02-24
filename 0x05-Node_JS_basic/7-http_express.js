const express = require('express');

const DATABASE = process.argv[2];
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const message = 'This is list of our students\n';
  try {
    const students = await countStudents(DATABASE);
    res.status(200).send(`${message}${students.join('\n')}`);
  } catch (error) {
    res.status(400).send(`${message}${error.message}`);
  }
});

app.listen(port, () => {

});

module.exports = app;
