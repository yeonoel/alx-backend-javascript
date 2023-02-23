const express = require('express');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const DATABASE = args[0];

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const message = 'This is list of our students\n';
  try {
    const students = await countStudents(DATABASE);
    res.send(`${message}${students.join('\n')}`);
  } catch (error) {
    res.send(`${message}${error.message}`);
  }
});

app.listen(port, () => {

});

module.exports = app;
