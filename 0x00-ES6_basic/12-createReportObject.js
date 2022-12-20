export default function createReportObject(employeesList) {
  return {
    allEmployees: {...employeesList,},
    getNumberOfDepartement(empList) {
      return Object.keys(empList).length;
    },
  };
};
