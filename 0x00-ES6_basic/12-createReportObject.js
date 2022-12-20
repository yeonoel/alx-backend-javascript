export default function createReportObject(employeesList) {
  object = { allEmployees: {...employeesList}};
  
  getNumberOfDepartement(employeesList) {
    return Object.keys(employeesList).length;
  }	
  
  return object;
};
