export default function createReportObject(employeesList) {
  object = { allEmployees: {...employeesList,},};

  getNumberOfDepartement(empList) {
    return Object.keys(empList).length;
  }

  return object;
};
