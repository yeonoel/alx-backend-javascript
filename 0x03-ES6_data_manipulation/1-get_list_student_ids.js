export default function getListStudentIds(arrObj) {
  if (!Array.isArray(arrObj)) {
    return [];
  }

  return arrObj.map(elem => elem.id);
}
