const fs = require('fs');

function readDatabase (path) {
  return new Promise((resolve, reject) => {
    fs.reaFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error(err));
        return;
      }
      const elems = data.toString().split('\n');

      let students = elems.filter((item) => item);
      students = students.map((item) => item.split(','));

      const fields = {};
      for (const i in students) {
        if (i !== 0) {
          if (!fields[students[i][3]]) fields[students[i][3]] = [];
          fields[students[i][3]].push(students[i][0]);
        }
      }
      delete fields.field;
      resolve(fields);
    });
  });
}

module.exports = readDatabase;
