interface  Teacher  {
  readonly firstName: string;
  readonly lastName: string; 
  fullTimeEmployee: boolean; 
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export default function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

interface StudentClassInterface {
  firstName: string;
  lastName: string;
}

interface StudentClassConstructorInterface {
  new(firstName: string, lastName: string): StudentClassInterface;
}



class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName: lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}

const studentClass: StudentClass = new StudentClass('light', 'yeo');
console.log(studentClass.displayName());
console.log(studentClass.workOnHomework());
