//Define interfaces for user data

interface students {
  name: string;
  rollNo: number;
  class: number;
  section: string;
  marks: number;
}

let student1: students = {
  name: "John Doe",
  rollNo: 101,
  class: 10,
  section: "A",
  marks: 85,
};

let student2: students = {
  name: "Jane Smith",
  rollNo: 102,
  class: 10,
  section: "B",
  marks: 92,
};

console.log("Student 1:", student1);
console.log("Student 2:", student2);

function calculateAverageMarks(students: students[]): number {
  let totalMarks = 0;
  for (let student of students) {
    totalMarks += student.marks;
  }
  return totalMarks / students.length;
}

const averageMarks = calculateAverageMarks([student1, student2]);
console.log("Average Marks:", averageMarks);
