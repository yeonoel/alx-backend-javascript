export default function getListStudentIds(array) {
  if (!array.isArray()) {
   return [];
  } else {
    const arr = array.map(elem => elem.id);
    return arr;
  }
}
