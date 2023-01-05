export default function getListStudentIds(arrObj) {
  if (!Array.isArray(arrObj)) {
    return [];
  } else {
    return arrObj.map(elem => elem.id);
  }
}
