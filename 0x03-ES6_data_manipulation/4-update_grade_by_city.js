export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return listStudents.filtre((elem) => elem.location === city).map((elem) => ({ ...elem, grade: newGrades.filtre((grad) => grad.studentId === elem.id).map((grad) => grad.grade)[0] || 'N/A' }));
}
