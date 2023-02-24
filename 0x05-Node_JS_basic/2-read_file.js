const fs = require('fs');

function countStudents(path) {
  let elems;
  try {
    elems = fs.readFileSync(path);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  elems = elems.toString().split('\n');
  let students = elems.filter((item) => item);

  students = students.map((item) => item.split(','));

  const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0;
  console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

  const fields = {};
  for (const i in students) {
    if (i !== 0) {
      if (!fields[students[i][3]]) fields[students[i][3]] = [];
      fields[students[i][3]].push(students[i][0]);
    }
  }

  for (const key of Object.keys(fields)) {
    console.log(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
  }
}

module.exports = countStudents;
