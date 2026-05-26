const students = [
  { name: "Ana Silva", grade: 8.5 },
  { name: "Bruno Costa", grade: 4.2 },
  { name: "Carla Souza", grade: 9.0 },
  { name: "Diego Lima", grade: 5.8 },
  { name: "Elena Martins", grade: 7.1 },
];

const isStudentApproved = (student) => student.grade >= 6;

const approveStudents = () => {
  return students.filter(isStudentApproved);
};

const approvedStudents = approveStudents();

console.log(approvedStudents);
