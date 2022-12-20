export default function createIteratorObject(report) {
  const arr = [];

  for (const elem of Object.keys(report.allEmployees)) {
    for (const emp of Object.keys.allEmployees[elem]) {
      arr.push(emp);
    }
}
 
   return arr;
}
