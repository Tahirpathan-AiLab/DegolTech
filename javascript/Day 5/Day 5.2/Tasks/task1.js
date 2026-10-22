const student = { name: "Tahir", course: "JavaScript", marks: 88 };
const studentJson = JSON.stringify(student);
const parsedStudent = JSON.parse(studentJson);

console.log(studentJson);
console.log(parsedStudent);
