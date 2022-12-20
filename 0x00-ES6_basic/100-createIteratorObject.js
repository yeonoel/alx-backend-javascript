export default function createIteratorObject(report) {
  const arr = [];
  // eslint-disable-next-line
	for (const elem of Object.keys(report.allEmployees)) {
    // eslint-disable-next-line
		for (const emp of report.allEmployees[elem]) {
      arr.push(emp);
    }
  }

  return arr;
}
