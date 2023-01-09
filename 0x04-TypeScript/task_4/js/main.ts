import { Cpp } from './Cpp';
import { Java } from './Java';
import { React } from './React';
import { Subjects } from './Teacher';

export const cpp = new Cpp();
export const java = new Java();
export const react = new React();
export const cteacher: Subjects.Teacher = {
  firstName: 'yeo',
  lastName: 'light',
  experienceTeachingC: 10,
}
// C++
console.log('C++');
cpp.setTeacher(cteacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

//Java
console.log('Java');
java.setTeacher(cteacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React
console.log('React');
react.setTeacher(cteacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
