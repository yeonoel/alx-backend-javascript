const express = require('express');

const DATABASE = process.argv[2];
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const title = 'This is the list of our students\n';
  try {
    const students = await countStudents(DATABASE);
    res.send(`${title}${students.join('\n')}`);
  } catch (error) {
    res.send(`${title}${error.message}`);
  }
});

app.listen(port, () => {

});

module.exports = app;
