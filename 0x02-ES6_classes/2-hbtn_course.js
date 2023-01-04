export default class HolbertonCourse() {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // name
  get name() {
    this._name;
  }
  set name(value) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // length
  get length() {
    return this._length;
  }
  set length(value) {
    if (typeof value !== 'int') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // students
  get students() {
    return this._students;
  }
  set students(value) {
    value.forEach((elem => {
      if (typeof elem !== 'string') {
        throw new TypeError('Students must be a string'); 
      }
      this._students = value;
    })
  }
}
