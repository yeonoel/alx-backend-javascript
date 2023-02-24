const express = require('express');

const DATABASE = process.argv[2];
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.write('This is list of our students\n');
  try {
    const students = await countStudents(DATABASE);
    res.end(`${students.join('\n')}`);
  } catch (error) {
    res.end(`${error.message}`);
  }
});

app.listen(port, () => {

});

module.exports = app;
