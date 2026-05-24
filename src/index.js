const students = [
  { name: "Ana Silva", grade: 8.5, approved: true },
  { name: "Bruno Costa", grade: 4.2, approved: false },
  { name: "Carla Souza", grade: 9.0, approved: true },
  { name: "Diego Lima", grade: 5.8, approved: false },
  { name: "Elena Martins", grade: 7.1, approved: true },
];

const approvedStudents = students.filter((student) => student.approved);

console.log(approvedStudents);
