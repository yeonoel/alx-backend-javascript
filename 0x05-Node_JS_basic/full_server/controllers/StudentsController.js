import readDatabase from '../utils';

class StudentsController {
  getAllStudents (request, response, DATABASE) {
    response.send(200);
    readDatabase(DATABASE)
      .then((fields) => {
        const students = [];
        let message;

        students.push('This is the list of our students');

        for (const key of Object.keys(fields)) {
          message = `Number of students in ${key}: ${
            fields[key].length
            } List: ${fields[key].join(', ')}`;
          students.push(message);
        }
        response.send(200, `${students.join('\n')}`);
      })
      .catch(() => {
        response.send(500, 'Cannot load the database');
      });
  }

  getAllStudentsByMajor (request, response, DATABASE) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.send(500, 'Major parameter must be CS or SWE');
    } else {
      readDatabase(DATABASE)
        .then((fields) => {
          const students = fields[major];
          response.send(200, `List: ${students.join(', ')}`);
        })
        .catch(() => response.send(500, 'Cannot load the database'));
    }
  }
}

export default StudentsController;
