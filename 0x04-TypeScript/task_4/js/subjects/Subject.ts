import {Subjects} from './Teacher';

namespace Subjects {
  export class Subject {
    const teacher: Subjects.Teacher;

    set setTeacher(teacher: Subjects.Teacher): void {
      this.teacher = teacher;
    }
  }
}
