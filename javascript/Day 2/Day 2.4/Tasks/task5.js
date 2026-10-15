// Section E: Student Result Processor
const students = [
  { id: 1, name: "Asha", marks: 82 },
  { id: 2, name: "Ravi", marks: 67 },
  { id: 3, name: "Neha", marks: 91 },
  { id: 4, name: "Imran", marks: 48 },
  { id: 5, name: "Meera", marks: 74 }
];

// forEach performs an action for every student.
students.forEach(student => {
  console.log(student.name + ": " + student.marks);
});

// filter makes a new array of students who passed.
const passedStudents = students.filter(student => student.marks >= 50);
console.log("Passed students:", passedStudents);

// map makes a new array containing the names of students who passed.
const passedNames = passedStudents.map(student => student.name);
console.log("Passed names:", passedNames);

// find returns the first student with this ID.
const selectedStudent = students.find(student => student.id === 3);
console.log("Student with ID 3:", selectedStudent);

// This closure remembers how many times a result operation was performed.
function createOperationCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const countOperation = createOperationCounter();
passedStudents.forEach(student => {
  console.log("Processing " + student.name + ", operation " + countOperation());
});
