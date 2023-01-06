export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return listStudents.filter((elem) => elem.location === city).map((elem) => ({ ...elem, grade: newGrades.filter((grad) => grad.studentId === elem.id).map((grad) => grad.grade)[0] || 'N/A' }));
}
