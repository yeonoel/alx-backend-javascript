export default function getStudentIdsSum(arrObj) {
  return arrObj.reduce((acc, curr) => acc + curr.id, 0);
}
