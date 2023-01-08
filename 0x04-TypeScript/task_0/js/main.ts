interface Student {
  firstName : string;
  lastName : string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'yeo';
  lastName: 'pevrogui noel';
  age: 27;
  location: 'Abidjan';
}

const student2: Student = {
  firsName: 'ligth';
  lastName: 'noel';
  age: 25;
  location: 'Dubai';
}

const studentsList: Student[] = [student1, student2];

const tbody = document.createElement('tbody');
const table = document.createElement('table');


studentsList.forEach((stud: Student) => {
  const row = document.createElement('tr');
  const tdFirstName = document.createElement('td');
  const tdLastName = document.createElement('td');
  tdFirstName.textContent = stud.firstName;
  tdLocation.textContent = stud.location;  
  
  row.appendChild(tdFisrtName);
  row.appendChild(tdLastName);
  tbody.appendChild(row);

});
table.appendChild(tbody);
document.body.appendChild(table);
