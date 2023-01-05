export default function getListStudentIds(arrObj) {
  if (Array.isArray(arrObj)) {
    return arrObj.map((elem) => elem.id);
  }

  return [];
}
