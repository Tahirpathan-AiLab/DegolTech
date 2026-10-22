const student = {
  name: "Asha",
  marks: 85,
  skills: ["JavaScript", "HTML"]
};

const jsonString = JSON.stringify(student, null, 2);
const parsedStudent = JSON.parse(jsonString);

console.log(jsonString);
console.log(parsedStudent.name);
